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

  const json = await commentDal.create(comments);
  return {
   ...commentDto,
   id:json._id,
   userId: json.userId,
   contentId: json.contentId,
   contentComment: json.contentComment,
   point: json.point,
   date: json.date,
   like: json.like,
   dislike: json.dislike
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.getAllComments = async () => {
 try {
  const json = await commentDal.getAll(
   {},
   [
    {
     path:'contentId.item',
     select:'name genre',
     populate:{
      path:'genre',
      select:'-_id name'
     }
    },
    {
     path:'userId',
     select: 'username profile'
    }
   ]
  );
  return json
 } catch (error) {
  throw new Error(error)
 }
}


exports.getAllCommentsWithPagination = async (req, res) => {
 try {
  const {perpage, page, sortBy, sortDir} = req.query;
  const json = await commentDal.getAllWithPagination(
   {},
   [{
    path:'contentId.item',
    select:'name genre',
    populate:{
     path:'genre',
     select:'-_id name'
    }
   },
    {
     path:'userId',
     select: 'username profile'
    }
   ],
   perpage,
   perpage * page,
   {[sortBy]: sortDir}
  );
  return json
 } catch (error) {
  throw new Error(error)
 }
}


exports.getById = async (req) => {
 try {
  const {id} = req.params;
  const json = await commentDal.getById(
   id,
   [
    {
     path:'contentId.item',
     select:'name genre',
     populate: {
      path:'genre',
      select:'-_id name'
     }
    },
    {
     path: 'userId',
     select: 'username, profile'
    }
   ]
  );
  return {
   ...commentDto,
   json
  }
 } catch (error) {
  console.log(error)
  throw new Error(error)
 }
}


exports.updateById = async (req) => {
 try {
  const {id} = req.params;
  const body = req.body;
  const json = await commentDal.updateById(id, {
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


exports.deleteById = async (req) => {
 try {
  const {id} = req.params;
  const json = await commentDal.deleteById(id);
  return json
 } catch (error) {
  throw new Error(error)
 }
}

