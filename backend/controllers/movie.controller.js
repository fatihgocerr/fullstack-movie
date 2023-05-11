const baseResponse = require('../dto/baseResponse');
const movieService = require('../services/movie.service');
const {StatusCodes} = require('http-status-codes');
const helpers = require('../utils/helpers');

exports.createMovie = async (req, res) => {
 try {
  const isInvalid = helpers.handleValidationErrors(req);
  if (isInvalid) {
   console.log(isInvalid)
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInvalid
   });
   return
  }
  const json = await movieService.createMovie(req, res);
  res.status(StatusCodes.CREATED).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.CREATED,
  });

 } catch (error) {
  helpers.logToError(error, req, 'Error in Create Movie')
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


exports.getAllMovies = async (req, res) => {
 try {
  //invalid control here
  const json = await movieService.getAllMovies(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error, req, 'Error in Get All Movies')
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


exports.getAllMoviesWithPagination = async (req, res) => {
 try {
  const isInvalid = helpers.handleValidationErrors(req);
  if (isInvalid) {
   // console.log(isInvalid)
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInvalid
   });
   return
  }
  const json = await movieService.getAllMoviesWithPagination(req);
  console.log(json)
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error, req, 'Error in Get All Movies With Pagination')
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
  const json = await movieService.getById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error, req, 'Error in Get Movie By Id')
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


exports.updateMovieById = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if ( isInValid ) {
   console.log(isInValid)
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   });
   return
  }
  const json = await movieService.updateMovieById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });

 } catch (error) {
  helpers.logToError(error,req,'Error in Update Movie')
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


exports.deleteMovieById = async (req, res) => {
 try {
  const isInvalid = helpers.handleValidationErrors(req);
  if (isInvalid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInvalid
   })
   return
  }
  const json = await movieService.deleteMovieById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req,'Error in Delete Movie')
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

exports.uploadImage = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if(isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   });
   return
  }
  const json = await movieService.uploadImage(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req,'Error in image upload Movie')
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


exports.updateImage = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req)
  if (isInValid) {
   res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   });
   return
  }
  const json = await movieService.updateImage(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req,'Error in updateImage Movie')
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


exports.updateScore = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if(isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   });
   return
  }
  const json = await movieService.updateScore(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req,'Error in updateScore Movie')
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

exports.getScore = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if( isInValid){
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   });
   return
  }
  const json = await movieService.getScore(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req,'Error in getScore Movie')
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


