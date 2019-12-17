const express = require('express');
const rp = require('request-promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

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

app.get('/api/jobs', (req, res) => {
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

app.listen(8080, () => console.log(`Example app listening on port 8080!`));

