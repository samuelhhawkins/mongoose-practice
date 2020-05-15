// Require needed modules
const express = require('express');
let db = require('../models')

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  db.Museum.find()
  .then(museums => {
    res.render('museums/index', {museums});
  })
  .catch(err => {
      console.log("error in museums index route", err)
      res.status(500).send({ message: 'oops?5'})
  })
});

router.post('/', (req, res) => {
  db.Museum.create({
    name: req.body.name,
    city: req.body.city,
    country: req.body.city,
    image: req.body.image
  })
  .then(newMuseum => {
    console.log(newMuseum)
    res.redirect('/museums')
  })
  .catch(err => {
      console.log("error in museums post route", err)
      res.status(500).send({ message: 'oops?6'})
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
    db.Museum.findOne({_id: req.params.id})
    .then(museumInfo => {
        db.Piece.find({museum: req.params.id})
        .then(pieces => {
            res.render('museums/show', {museum: museumInfo, pieces})
        })
    })
    .catch(err => {
        console.log("error in get musuem by id route", err)
        res.status(500).send({ message: 'oops?7'})
    })
  });

module.exports = router;
