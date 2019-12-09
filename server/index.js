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

app.get('/api/jobs', (req, res) => {
    const baseUri = 'https://jobs.github.com/positions.json?page=';
    const pageableUri = req.query.hasOwnProperty('page') ? req.query.page.toString() : '1';
    const forJobOptions = {
        method: 'GET',
        uri: baseUri.concat(pageableUri)
    };
    //todo multi parameters from query handler
    res.setHeader('Content-Type', 'application/json');
    rp(forJobOptions)
        .then(function (response) {
            res.send(response);
        }).catch(function (err) {
            console.error('Request was failed: ');
            res.send(JSON.stringify(err));
        });
});

app.listen(8080, () => console.log(`Example app listening on port 8080!`));

