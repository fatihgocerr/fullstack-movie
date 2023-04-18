const commentService = require('../services/comment.service');
const { StatusCodes } = require('http-status-codes');
const baseResponse = require('../dto/baseResponse');


exports.createComment = async (req, res) => {
 try {
 //valid control here
  const json = await commentService.createComment(req, res);
  res.status(StatusCodes.CREATED).json({
   ...baseResponse,
   success: true,
   data:json,
   timestamp: Date.now(),
   code: StatusCodes.CREATED
  })
 } catch (error) {
  //log to error
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   error: true,
   success: false,
   timestamp: Date.now(),
   code: StatusCodes.INTERNAL_SERVER_ERROR,
   message:error.message
  });
 }
}


