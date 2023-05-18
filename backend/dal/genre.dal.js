const Genre = require('../models/genre.model');


const GenreDataAccessLayer = {
 async create(genre) {
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
 async getById(id) {
  return await Genre.findById({_id:id});
 },
 async updateById(id, body) {
  return await Genre.findByIdAndUpdate(id, body);
 },
 async deleteById(id) {
  return await Genre.findByIdAndDelete(id)
 },
 async findOne(where) {
  return await Genre.findOne(where).populate({
   path: 'movies',
   select: 'name -_id poster imdbScore userScore'
  });
 }

};

module.exports = GenreDataAccessLayer;