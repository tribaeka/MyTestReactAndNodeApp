const express = require('express');
const rp = require('request-promise');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressApp = express();
expressApp.use(bodyParser.urlencoded({extended: false}));


const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

expressApp.use(cors(corsOptions));

function correctUrlForJobsList(query){
    let baseUri = 'https://jobs.github.com/positions.json?';
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

function getUrlForSingleJob(query){
    const urlPrefix = 'https://jobs.github.com/positions/';
    const urlPostfix = '.json';
    return urlPrefix + query.id + urlPostfix;
}

expressApp.get('/api/jobs', (req, res) => {
    console.log(correctUrlForJobsList(req.query));
    const jobsFetchOptions = {
        method: 'GET',
        uri: correctUrlForJobsList(req.query)
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

expressApp.get('/api/job', (req, res) => {
    const jobsFetchOptions = {
        method: 'GET',
        uri: getUrlForSingleJob(req.query)
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

