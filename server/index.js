const mySqlConnection = require('./dbHelpers/mySqlWrapper');
const bearerTokensDBHelper = require('./dbHelpers/bearerTokensDBHelper')(mySqlConnection);
const userDBHelper = require('./dbHelpers/userDBHelper')(mySqlConnection);
const express = require('express');
const rp = require('request-promise');
const bodyParser = require('body-parser');
const cors = require('cors');
const oAuth2Server = require('node-oauth2-server');

/* Here we instantiate the model we just made and inject the dbHelpers we use in it */
const oAuthModel =
    require('./authorisation/accessTokenModel')(userDBHelper, bearerTokensDBHelper);
const expressApp = express();
expressApp.use(bodyParser.urlencoded({extended: true}));
expressApp.oauth = oAuth2Server({
    model: oAuthModel,
    grants: ['password'],
    debug: true
})

const authRoutesMethods = require('./authorisation/authRoutesMethods')(userDBHelper);
const authRouter = require('./authorisation/authRouter')(express.Router(),
                                                            expressApp,
                                                            authRoutesMethods);

expressApp.use('/auth', authRouter);
expressApp.use(expressApp.oauth.errorHandler())

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

expressApp.use(cors(corsOptions));

function correctUrl(query){
    let baseUri = 'https://jobs.github.com/positions.json?';
    console.log(query);
    if (query.hasOwnProperty('page')) {
        baseUri = baseUri.concat('page=' + query.page.toString() + '&');
    }
    if (query.hasOwnProperty('fullTime')) {
        baseUri = baseUri.concat('full_time=' + query.fullTime.toString() + '&');
    }
    if (query.hasOwnProperty('specificationFilter') && !!query.specificationFilter){
        baseUri = baseUri.concat('description=' + query.specificationFilter.toString() + '&');
    }
    if (query.hasOwnProperty('locationFilter') && !!query.locationFilter){
        baseUri = baseUri.concat('location=' + query.locationFilter.toString() + '&');
    }

    return baseUri;
}

expressApp.get('/api/jobs', (req, res) => {
    console.log(correctUrl(req.query));
    const jobsFetchOptions = {
        method: 'GET',
        uri: correctUrl(req.query)
    };

    res.setHeader('Content-Type', 'application/json');
    rp(jobsFetchOptions)
        .then(function (response) {
            res.send(response);
        }).catch(function (err) {
            console.error('Request was failed: ');
            res.send(JSON.stringify(err));
        });
});

expressApp.listen(8080, () => console.log(`Example app listening on port 8080!`));

