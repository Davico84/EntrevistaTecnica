const express= require("express");
const server= express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
//  const {get_autores,get_libros}= require("./data/controler/controler.js");

 server.get('/autores', (req, res) => {
     const autores= require("./src/data/autores.json");
     
     res.json(autores);
 });
 server.get('/libros', (req, res) => {
    
     const libros= require("./src/data/libros.json");
     
     res.json(libros);
 });    
// const { Router } = require('express');
// const router = Router();
// router.get('/autores', get_autores);
// router.get('/libros', get_libros);

// server.use("/", router);


module.exports= server;