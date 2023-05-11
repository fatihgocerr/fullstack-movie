const {seriesService} = require('../services')
const baseResponse = require('../dto/baseResponse');
const {StatusCodes}  = require('http-status-codes')
const helpers = require('../utils/helpers')

exports.create= async (req,res) => {
 try {
 const isInValid = helpers.handleValidationErrors(req);
 if(isInValid) {
  return res.status(StatusCodes.BAD_REQUEST).json({
   ...baseResponse,
   ...isInValid
  })
  return
 }
  const json = await seriesService.create(req,res)
  res.status(StatusCodes.CREATED).json({
   ...baseResponse,
   data:json,
   success:true,
   error:false,
   timestamp: Date.now(),
   code:StatusCodes.CREATED
  })
 } catch (error) {
 helpers.logToError(error,req,'Error in Create Series');
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


exports.getAll = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req)
  if(isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await seriesService.getAll();
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req, 'Error in getAll Series')
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


exports.getAllWithPagination = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req)
  if(isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await seriesService.getAllWithPagination(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req, 'Error in getAllWithPagination Series')
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
  const isInValid = helpers.handleValidationErrors(req)
  if(isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await seriesService.getById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req, 'Error in getById Series')
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
  const isInValid = helpers.handleValidationErrors(req)
  if(isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await seriesService.updateById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });

 } catch (error) {
  helpers.logToError(error,req, 'Error in updateById Series')
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
  const isInValid = helpers.handleValidationErrors(req)
  if(isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await seriesService.deleteById(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req, 'Error in deleteById Series')
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
  const isInValid = helpers.handleValidationErrors(req)
  if(isInValid) {
   console.log('isInValid', isInValid)
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await seriesService.uploadImage(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req, 'Error in uploadImage Series')
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
  if(isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await seriesService.updateImage(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req, 'Error in updateImage Series')
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
  const isInValid = helpers.handleValidationErrors(req)
  if(isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await seriesService.updateScore(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req, 'Error in updateScore Series')
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
  const isInValid = helpers.handleValidationErrors(req)
  if(isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await seriesService.getScore(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error,req, 'Error in getScore Series')
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


