const baseResponse = require("../dto/baseResponse");
const directorService = require("../services/director.service");
const { StatusCodes } = require("http-status-codes");


exports.createDirector = async (req, res) => {
 try {
 //invalid control here
 const json = await directorService.createDirector(req, res);
 res.status(StatusCodes.CREATED).json({
 ...baseResponse,
 data: json,
 success: true,
 timestamp: Date.now(),
 code: StatusCodes.CREATED,

 });
 } catch (error) {
 //log to error
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
  //invalid control here
  const json = await directorService.getAllDirectors();
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  //log to error
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
  //invalid control here
  const json = await directorService.getAllDirectorWithPagination(req, res);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  //log to error
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
  //invalid control here
  const json = await directorService.getById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
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
  //invalid control here
  const json = await directorService.updateDirectorById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });

 } catch (error) {
  //log to error
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
  //invalid control here
  const json = await directorService.deleteById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  //log to error
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