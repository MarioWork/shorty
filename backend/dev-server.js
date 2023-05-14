const express = require('express');
const retrieve = require('./src/endpoints/retrieve');
const write = require('./src/endpoints/write');

//For local development purposes
const app = express();
app.use('/', retrieve);
app.use('/w', write);

module.exports = {
    index: app
};
