// Require Mongoose node module
const mongoose = require('mongoose');

// Create Museum Schema
let museumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: String,
  country: String,
  image: String
})

// TODO: Export Museum Model
module.exports = mongoose.model('museum', museumSchema)
