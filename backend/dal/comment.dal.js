const Comment = require('../models/comment.model');


const commentDataAccessLayer = {
 async createComment(comment) {
  return await comment.save();
 },
 async getAllComments(){
  return await Comment.find();
 },
 async getAllCommentsWithPagination(where = {},populate,limit,skip,sort){
  return await Comment.find(where)
   .limit(limit)
   .skip(skip)
   .sort(sort)
   // .populate(populate)
 },
 async getCommentById(id){
  return await Comment.findById({_id: id});
 },
 async updateCommentById(id,body){
  return await Comment.findByIdAndUpdate({_id: id},body);
 },
 async deleteCommentById(id){
  return await Comment.findByIdAndDelete({_id: id})
 }
}

module.exports = commentDataAccessLayer;