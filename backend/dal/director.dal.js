const Director = require('../models/director.model');


const DirectorDataAccessLayer = {
 async create(director) {
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
 async getById(id) {
  return await Director.findById({_id: id});
 },
 async updateById(id, body) {
  return await Director.findByIdAndUpdate({_id: id}, body);
 },
 async deleteById(id) {
  return await Director.findByIdAndDelete({_id: id})
 }
}


module.exports = DirectorDataAccessLayer;