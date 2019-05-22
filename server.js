const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/api');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api', apiRoutes);

app.listen(8080);