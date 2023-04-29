const commentService = require('../services/comment.service');
const { StatusCodes } = require('http-status-codes');
const baseResponse = require('../dto/baseResponse');
const helpers = require('../utils/helpers');

exports.createComment = async (req, res) => {
 try {
 const isInValid = helpers.handleValidationErrors(req);
 if (isInValid) {
  return res.status(StatusCodes.BAD_REQUEST).json({
   ...baseResponse,
   ...isInValid
  })
  return
 }
  const json = await commentService.createComment(req, res);
  res.status(StatusCodes.CREATED).json({
   ...baseResponse,
   success: true,
   data:json,
   timestamp: Date.now(),
   code: StatusCodes.CREATED
  })
 } catch (error) {
  helpers.logToError(error, req,'Error in createComment');
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
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
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
 helpers.logToError(error, req,'Error in getAllComments');
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
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
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
  helpers.logToError(error, req,'Error in getAllWithPagination');
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
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
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
  helpers.logToError(error, req,'Error in getById Comment')
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
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
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
 helpers.logToError(error, req,'Error in updateById Comment')
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
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
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
 helpers.logToError(error, req,'Error in deleteById Comment')
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

