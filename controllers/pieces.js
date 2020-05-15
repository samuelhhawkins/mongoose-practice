// Require needed modules
const express = require('express');
let db = require('../models')
// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
    res.render('pieces/index', {pieces})
  })
  .catch(err => {
      console.log("error in get pieces  index route", err)
      res.status(500).send({ message: 'oops?1'})
  })
});

router.post('/', (req, res) => {
  //Replace stub route with page that renders form for adding new piece
  db.Piece.create({
    name: req.body.name,
    image: req.body.image,
    originCountry: req.body.originCountry,
    museum: req.body.museum,
    creator: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      image: req.body.image,
      birthyear: req.body.birthyear,
      deathyear: req.body.deathyear
    }
  })
  .then(piece => {
    res.redirect('/pieces')
  })
  .catch(err => {
      console.log("error in post pieces route", err)
      res.status(500).send({ message: 'oops?2'})
  })
});


router.get('/new', (req, res) => {
  //Replace stub route with page that renders form for adding new piece
  db.Museum.find()
 .then(museums => {
   res.render('pieces/new', {museums});
 })
 .catch(err => {
     console.log("error in new form pieces route", err)
     res.status(500).send({ message: 'oops?3'})
 })
});



router.get('/:id', (req, res) => {
  // Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  db.Piece.findOne({_id: req.params.id})
  .populate('museum')
  .then(piece => {
    res.render('pieces/show', {piece})
  })
  .catch(err => {
      console.log("error in get single pieces route", err)
      res.status(500).send({ message: 'oops?4'})
  })
});

module.exports = router;
