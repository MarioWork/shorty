const express = require('express');
const retrieve = require('./src/endpoints/retrieve');
const write = require('./src/endpoints/write');

//For local development purposes
const app = express();
app.get('/', retrieve);
app.post('/w', write);

module.exports = {
    index: app
};
