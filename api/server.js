const express = require('express');
const carRouter = require('../cars/car-router');
const server = express();

server.use(express.json());
server.use('/cars', carRouter);
server.get('/', (req, res) =>{
    res.send('Cars :) ');
});

module.exports = server;
