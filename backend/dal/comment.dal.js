const Comment = require('../models/comment.model');


const commentDataAccessLayer = {
 async create(comment) {
  return await comment.save();
 },
 async getAll(where={}, populate) {
  return await Comment.find(where)
   .populate(populate);
 },
 async getAllWithPagination(where = {}, populate, limit, skip, sort) {
  return await Comment.find(where)
   .limit(limit)
   .skip(skip)
   .sort(sort)
   .populate(populate)
 },
 async getById(id,populate) {
  return await Comment.findById({_id: id}).populate(populate);
 },
 async updateById(id, body) {
  return await Comment.findByIdAndUpdate({_id: id}, body);
 },
 async deleteById(id) {
  return await Comment.findByIdAndDelete({_id: id})
 },
}

module.exports = commentDataAccessLayer;

