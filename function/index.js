const express = require('express');
const retrieve = require('./src/retrieve');
const write = require('./src/write');

//For local development purposes
const app = express();
app.use('/retrieve/:id', retrieve);
app.use('/write', write);

module.exports = {
    index: app,
    retrieve,
    write
};
