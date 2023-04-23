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


exports.getAllComments = async (req,res) => {
 try {
 //valid is control here
  const json = await commentService.getAllComments()
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data:json,
   success:true,
   error:false,
   timestamp:Date.now(),
   code:StatusCodes.OK
  })
 } catch (error) {
 //log to error
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   success:false,
   error:true,
   timestamp:Date.now(),
   code:StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message
  })
 }
}


exports.getAllWithPagination= async(req,res) => {
 try {
 //validation control is here
  const json = await commentService.getAllCommentsWithPagination(req,res)
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data:json,
   success:true,
   error:false,
   timestamp:Date.now(),
   code:StatusCodes.OK
  })
 } catch (error) {
  //log to error
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   success:false,
   error:true,
   timestamp:Date.now() ,
   code:StatusCodes.INTERNAL_SERVER_ERROR,
   message:error.message
  })
 }
}


exports.getById = async( req,res) => {
 try {
  //valid control is here
 const json = await commentService.getById(req);
 res.status(StatusCodes.OK).json({
  ...baseResponse,
  data:json,
  success:true,
  error:false,
  timestamp:Date.now,
  code:StatusCodes.OK
 })
 } catch (error) {
  //log to error
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   success:false,
   error:true,
   timestamp: Date.now(),
   code:StatusCodes.INTERNAL_SERVER_ERROR,
   message:error.message
  });
 }
}



exports.updateById = async (req,res) => {
 try {
 //valid control is here
  const json = await commentService.updateById(req,res);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data:json,
   success:true,
   error:false,
   timestamps:Date.now(),
   code:StatusCodes.OK
  })
 } catch (error) {
 //log to error
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   success:false,
   error:true,
   timestamp:Date.now(),
   code: StatusCodes.INTERNAL_SERVER_ERROR,
   message:error.message
  })
 }
}



exports.deleteById = async (req,res) => {
 try {
 //valid control is here
  const json = await commentService.deleteById(req,res)
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data:json,
   success:true,
   error:false,
   timestamp:Date.now(),
   code:StatusCodes.OK
  })
 } catch (error) {
  //log to error
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   success:false,
   error:true,
   timestamp: Date.now(),
   code:StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message
  })
 }
}

