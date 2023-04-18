const baseResponse = require("../dto/baseResponse");
const {genreService} = require('../services/')
const {StatusCodes} = require("http-status-codes");

exports.createGenre = async (req, res) => {
 try {
  //invalida data here
  const json = await genreService.createGenre(req, res);
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


exports.getAllGenres = async (req, res) => {
 try {
  const json = await genreService.getAllGenres();
  console.log(json)
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


exports.getAllGenresWithPagination = async (req, res) => {
 try {
  //invalid control here
  const json = await genreService.getAllGenresWithPagination(req, res);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  })
 } catch (error) {
  //log to error
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   error:true,
   success: false,
   timestamp: Date.now(),
   code:StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message
  })
 }
}


exports.getGenreById = async (req,res) => {
 try {
 // valid control is here
  const json = await genreService.getGenreById(req);
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


exports.updateGenreById = async (req, res) => {
 try {
 //valid control here
  const json = await genreService.updateGenreById(req);
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
  })
 }
}


exports.deleteGenreById = async (req, res) => {
 try {
  //invalid control here
  const json = await genreService.deleteGenreById(req);
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

