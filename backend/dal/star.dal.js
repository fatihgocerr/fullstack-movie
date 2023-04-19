const Star = require('../models/star.model');


const StarDataAccessLayer = {
 async create(star) {
  return await star.save();
 },
 async getAllStar() {
  return await Star.find();
 },
 async getAllStarWithPagination(where = {}, populate, limit, skip,sort) {
  return await Star.find()
   .limit(limit)
   .skip(skip)
   .sort(sort)
  // .populate(populate)
 },
 async getById(id) {
  return await Star.findById({_id: id});
 },
 async updateById(id, body) {
  console.log(id, body)
  return await Star.findByIdAndUpdate({_id: id}, body);
 },
 async deleteById(id) {
  return await Star.findByIdAndDelete({_id: id})
 }
}

module.exports = StarDataAccessLayer;