const mongoose = require('mongoose');
const {isBoolean} = require("validator");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
 userId: {type: Schema.Types.ObjectId, ref: 'User'},
 contentId: {
 kind:{type:String, required: true},
 item:{type:Schema.Types.ObjectId, refPath:'contentId.kind'}
 },
 // contentId: {type:Schema.Types.ObjectId},
 // ref:{type:String, required:true},
 contentComment: {type: String, required: true},
 point: {type: Number, required: true},
 date: {type: Date, required: true},
 like: {type: Boolean, required: true},
 dislike: {type: Boolean, required: true}
},{
 timestamps: true,
 minimize:true,
 autoIndex: true
});

const Comment = mongoose.model('Comment', commentSchema, 'comments');

module.exports = Comment;
