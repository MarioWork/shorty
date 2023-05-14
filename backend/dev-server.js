const express = require('express');
const retrieve = require('./src/endpoints/retrieve');
const write = require('./src/endpoints/write');

//For local development purposes
const app = express();
app.use('/w', write);
app.use('/', retrieve);

module.exports = {
    index: app
};
