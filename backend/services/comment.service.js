const Comment = require('../models/comment.model');
const commentDal = require('../dal/comment.dal');
const commentDto = require('../dto/comment.dto');


exports.createComment = async (req, res) => {
 try {
  const {userId, contentId, contentComment, point, date, like, dislike} = req.body;
  const comments = new Comment({
   userId,
   contentId,
   contentComment,
   point,
   date,
   like,
   dislike
  });
  const json = await commentDal.createComment(comments);
  return {
   ...commentDto,
   ...json
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.getAllComments = async () => {
 try {
  const json = await commentDal.getAllComments();
  return json
 } catch (error) {
  throw new Error(error)
 }
}


exports.getAllCommentsWithPagination = async (req, res) => {
 try {
  const {perpage, page, sortBy, sortDir} = req.query;
  const json = await commentDal.getAllCommentsWithPagination(
   {},
   {},
   perpage,
   perpage * page,
   {[sortBy]: sortDir}
  );
  return json
 } catch (error) {
  throw new Error(error)
 }
}


exports.getCommentById = async (req) => {
 try {
  const {id} = req.params;
  const json = await commentDal.getCommentById(id);
  return {
   ...commentDto,
   ...json
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.updateDirectorById = async (req) => {
 try {
  const {id} = req.params;
  const body = req.body;
  const json = await commentDal.updateCommentById(id, {
   body
  });
  return {
   ...commentDto,
   id: json._id,
   ...json
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.deleteCommentById = async (req) => {
 try {
  const {id} = req.params;
  const json = await commentDal.deleteCommentById(id);
  return {
   ...commentDto,
   id: json._id,
   ...json
  }
 } catch (error) {
  throw new Error(error)
 }
}

