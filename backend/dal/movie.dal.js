const Movie = require('../models/movie.model');

const MovieDataAccessLayer = {
 async createMovie(movie) {
  return await movie.save();
 },
 //list all movies
 //list all movies by where short and limit
 //get movie by id
 //update movie by id
 //delete movie by id


}

module.exports = MovieDataAccessLayer;