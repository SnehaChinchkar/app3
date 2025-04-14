const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Movie Schema
const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  length: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }
});

// Create the Movie Model based on the Schema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
