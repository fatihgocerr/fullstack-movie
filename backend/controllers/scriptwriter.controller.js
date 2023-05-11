const baseResponse = require("../dto/baseResponse");
const scriptwriterService = require("../services/scriptwriter.service");
const {StatusCodes} = require("http-status-codes");
const helpers = require('../utils/helpers')

exports.createScriptwriter = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   });
   return
  }
  const json = await scriptwriterService.createScriptwriter(req, res);
  res.status(StatusCodes.CREATED).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.CREATED,

  });
 } catch (error) {
  console.log(error)
  helpers.logToError(error, req, 'Error in createScriptwriter')
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   error: true,
   success: false,
   timestamp: Date.now(),
   code: StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message
  });
 }
}


exports.getAllScriptwriters = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   });
   return
  }
  const json = await scriptwriterService.getAllScriptwriters();
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error, req, 'Error in getAllScriptwriters')
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   error: true,
   success: false,
   timestamp: Date.now(),
   code: StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message

  });
 }
}


exports.getAllScriptwriterWithPagination = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   });
   return
  }
  const json = await scriptwriterService.getAllScriptwriterWithPagination(req, res);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error, req, 'Error in getAllScriptwriterWithPagination')
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   error: true,
   success: false,
   timestamp: Date.now(),
   code: StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message

  });
 }
}


exports.getById = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   });
   return
  }
  const json = await scriptwriterService.getById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error, req, 'Error in getById Scriptwriter')
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   error: true,
   success: false,
   timestamp: Date.now(),
   code: StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message
  });
 }
}


exports.updateById = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   });
   return
  }
  const json = await scriptwriterService.updateById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });

 } catch (error) {
  helpers.logToError(error, req, 'Error in updateById Scriptwriter')
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   error: true,
   success: false,
   timestamp: Date.now(),
   code: StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message
  });
 }
}


exports.deleteById = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   });
   return
  }
  const json = await scriptwriterService.deleteById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error, req, 'Error in deleteById Scriptwriter')
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   error: true,
   success: false,
   timestamp: Date.now(),
   code: StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message
  });
 }
}