const baseResponse = require("../dto/baseResponse");
const directorService = require("../services/director.service");
const { StatusCodes } = require("http-status-codes");
const helpers = require("../utils/helpers");


exports.createDirector = async (req, res) => {
 try {
  const isInvalid = helpers.handleValidationErrors(req);
  if (isInvalid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInvalid
   });
   return
  }
 const json = await directorService.createDirector(req, res);
 res.status(StatusCodes.CREATED).json({
 ...baseResponse,
 data: json,
 success: true,
 timestamp: Date.now(),
 code: StatusCodes.CREATED,

 });
 } catch (error) {
 helpers.logToError(error, req, 'Error in Create Director')
  console.log(error)
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


exports.getAllDirectors = async (req, res) => {
 try {
  const isInvalid = helpers.handleValidationErrors(req);
  if (isInvalid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInvalid
   });
   return
  }
  const json = await directorService.getAllDirectors();
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req,'Error in Get All Directors')
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


exports.getAllDirectorWithPagination = async (req, res) => {
 try {
  const isInvalid = helpers.handleValidationErrors(req);
  if (isInvalid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInvalid
   });
   return
  }
  const json = await directorService.getAllDirectorWithPagination(req, res);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req,'Error in Get All Directors With Pagination');
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
  const isInvalid = helpers.handleValidationErrors(req);
  if (isInvalid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInvalid
   });
   return
  }
  const json = await directorService.getById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req,'Error in Get Director By Id');
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


exports.updateDirectorById = async (req, res) => {
 try {
  const isInvalid = helpers.handleValidationErrors(req);
  if (isInvalid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInvalid
   });
   return
  }
  const json = await directorService.updateDirectorById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });

 } catch (error) {
  console.log(error)
  helpers.logToError(error,req,'Error in Update Director By Id');
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
  const isInvalid = helpers.handleValidationErrors(req);
  if (isInvalid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInvalid
   });
   return
  }
  const json = await directorService.deleteById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req,'Error in Delete Director By Id')
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