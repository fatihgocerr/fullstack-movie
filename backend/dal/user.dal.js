const User = require('../models/user.model');

const UserDataAccessLayer = {
 async create(user) {
  return await user.save();
 },
 async getAllUsers(where= {}, populate) {
  return await User.find(where, {password: 0})
   .populate(populate);
 },
 async getAllUsersWithPagination(where = {}, populate, limit, skip,sort) {
  return await User.find(where, {password: 0})
   .limit(limit)
   .skip(skip)
   .sort(sort)
   .populate(populate)
 },
 async getById(id,populate) {
  return await User.findById({_id: id}).populate(populate);
 },
 async updateUserById(id, body) {
  return await User.findByIdAndUpdate({_id: id}, body);
 },
 async deleteUserById(id) {
  return await User.findByIdAndDelete({_id: id})
 },
 async findOne(where) {
  return await User.findOne(where);
 },
 async count() {
  return await User.countDocuments();
 }
}


module.exports = UserDataAccessLayer;