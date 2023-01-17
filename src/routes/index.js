//const routes = require('express').Router();
const jokes = require('../controllers');

const express = require('express');
const router = express.Router();




router.get('/', (req, res) => {
  res.send('Sergio Bravo');
});

router.get('/jokes',jokes.displayJoke);
console.log("aqui tambien antes estoy sergio 1");
router.use('/contacts', require('./contacts'));
console.log("aqui tambien despues estoy sergio 3");
module.exports = router;