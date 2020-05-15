// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.museum.find()
  .then(museums => {
    res.render('museums/index', {museums});
  })
  .catch(err => {
      console.log("error in museums index route", err)
      res.status(500).send({ message: 'oops?'})
  })
});

router.post('/', (req, res) => {
  db.museum.create({
    name: req.body.name,
    city: req.body.city,
    country: req.body.city,
    image: req.body.image
  })
  .then(newMuseum => {
    cosnsole.log(newMuseum)
    res.redirect('/museums')
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  res.send('museums/show');
});

module.exports = router;
