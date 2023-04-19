const Movie = require('../models/movie.model');

const MovieDataAccessLayer = {
 async create(movie) {
  return await movie.save();
 },
 async getAllMovies(where= {}, populate) {
  return await Movie.find(where)
   .populate(populate);
 },
 async getAllMoviesWithPagination(where = {}, populate, limit, skip,sort) {
  return await Movie.find()
   .limit(limit)
   .skip(skip)
   .sort(sort)
   .populate(populate)
 },
 async getById(id) {
  return await Movie.findById({_id: id});
 },
 async updateMovieById(id, body) {
  return await Movie.findByIdAndUpdate({_id: id}, body);
 },
 async deleteMovieById(id) {
  return await Movie.findByIdAndDelete({_id: id})
 }
 //list all movies
 //list all movies by where short and limit
 //get movie by id
 //update movie by id
 //delete movie by id


}

module.exports = MovieDataAccessLayer;