const Director = require('../models/director.model');


const DirectorDataAccessLayer = {
 async createDirector(director) {
  return await director.save();
 },
 async getAllDirector() {
  return await Director.find();
 },
 async getAllDirectorWithPagination(where = {}, populate, limit, skip,sort) {
  return await Director.find()
   .limit(limit)
   .skip(skip)
   .sort(sort)
  // .populate(populate)
 },
 async getDirectorById(id) {
  return await Director.findById({_id: id});
 },
 async updateDirectorById(id, body) {
  return await Director.findByIdAndUpdate({_id: id}, body);
 },
 async deleteDirectorById(id) {
  return await Director.findByIdAndDelete({_id: id})
 }
}

module.exports = DirectorDataAccessLayer;