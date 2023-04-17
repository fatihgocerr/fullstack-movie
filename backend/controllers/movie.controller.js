const baseResponse = require('../dto/baseResponse');
const movieService = require('../services/movie.service');
const {StatusCodes} = require('http-status-codes');


exports.createMovie = async (req, res) => {
 try {
 //invalid request

  const json = await movieService.createMovie(req, res);
  res.status(StatusCodes.CREATED).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.CREATED,
  });

 } catch (error) {
  console.log(error);
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

