/*const routes = require('express').Router();
const jokes = require('../controllers');*/

const express = require('express');
const router = express.Router();

//vamos a ver si me sale a mi
//const contacts = require('contacts');


routes.get('/', (req, res) => {
  res.send('Sergio Bravo');
});

routes.get('/jokes',jokes.displayJoke);

routes.get('/contacts', contacts.visualizaMensaje);

module.exports = routes;