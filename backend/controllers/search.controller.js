const helpers = require("../utils/helpers");
const {StatusCodes} = require("http-status-codes");
const baseResponse = require("../dto/baseResponse");
const searchService = require("../services/search.service");

exports.search = async (req, res) => {
 try {
  const isInvalid = helpers.handleValidationErrors(req);
  if (isInvalid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInvalid
   });
   return
  }
  const json = await searchService.search(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req,'Error in getScore Anime')
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


