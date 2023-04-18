const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
 userId: {type: Schema.Types.ObjectId, ref: 'User'},
 contentId: {
  type: Schema.Types.ObjectId,
  refPath: 'refPath'},
 contentComment: {type: String, required: true},
 point: {type: Number, required: true},
 date: {type: Date, required: true},
 like: {type: Number, required: true},
 dislike: {type: Number, required: true}
},{
 timestamps: true,
 minimize:true,
 autoIndex: true
});

const Comment = mongoose.model('Comment', commentSchema, 'comments');

module.exports = Comment;
