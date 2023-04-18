const Genre = require('../models/genre.model');


const GenreDataAccessLayer = {
 async createGenre(genre) {
  return await genre.save();
 },
 async getAllGenres() {
  return await Genre.find();
 },
 async getAllGenreWithPagination(where = {}, populate, limit, skip,sort) {
  return await Genre.find()
   .limit(limit)
   .skip(skip)
   .sort(sort)
  // .populate(populate)
 },
 async getGenreById(id) {
  console.log(id)
  return await Genre.findById(id);
 },
 async updateGenreById(id, body) {
  return await Genre.findByIdAndUpdate(id, body);
 },
 async deleteGenreById(id) {
  return await Genre.findByIdAndDelete(id)
 }

};

module.exports = GenreDataAccessLayer;