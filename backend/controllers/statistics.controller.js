const {statisticsService} = require('../services');
const baseResponse = require('../dto/baseResponse');
const {StatusCodes} = require('http-status-codes')
const helpers = require('../utils/helpers')

exports.getAllCounts = async (req, res) => {
 try {
  const json = await statisticsService.getAllCount(req, res);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  console.log(error)
  helpers.logToError(error, req, 'Error in Get Lengths')
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   success: false,
   error: true,
   timestamp: Date.now(),
   code: StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message
  })
 }
}


exports.getGenreCounts = async (req, res) => {
 try {
  const json = await statisticsService.getGenreCount(req, res);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  console.log(error)
  helpers.logToError(error, req, 'Error in Get Lengths')
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   success: false,
   error: true,
   timestamp: Date.now(),
   code: StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message
  })
 }
}