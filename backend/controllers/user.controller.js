const baseResponse = require("../dto/baseResponse");
const userService = require("../services/user.service");
const {StatusCodes} = require("http-status-codes");
const helpers = require('../utils/helpers')

exports.createUser = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await userService.createUser(req, res);
  res.status(StatusCodes.CREATED).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.CREATED,
  });
 } catch (error) {
  console.log(error);
  helpers.logToError(error, req, 'Error in Create User')
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
   ...baseResponse,
   error: true,
   success: false,
   timestamp: Date.now(),
   code: StatusCodes.INTERNAL_SERVER_ERROR,
   message: error.message,
  });
 }
}


exports.getAllUsers = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await userService.getAllUsers();
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error, req, 'Error in Get All Users')
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


exports.getAllUsersWithPagination = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await userService.getAllUSersWithPagination(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   error: false,
   timestamp: Date.now(),
   code: StatusCodes.OK
  })
 } catch (error) {
  helpers.logToError(error, req, 'Error in Get All Users With Pagination')
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


exports.getUserById = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await userService.getById(req)
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error, req, 'Error in Get User By Id')
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


exports.updateUserById = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await userService.updateUser(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });

 } catch (error) {
  helpers.logToError(error, req, 'Error in Update User By Id')
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


exports.deleteUserById = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await userService.deleteUser(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error, req, 'Error in Delete User By Id')
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


exports.login = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await userService.login(req, res);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   error: false,
   timestamp: Date.now,
   code: StatusCodes.OK
  })
 } catch (error) {
  helpers.logToError(error, req, 'Error in Login')
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


exports.uploadPP = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await userService.uploadProfilePicture(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });

 } catch (error) {
  helpers.logToError(error, req, 'Error in Upload Profile Picture')
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

exports.updatePP = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await userService.updateProfilePicture(req);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   data: json,
   success: true,
   timestamp: Date.now(),
   code: StatusCodes.OK
  });
 } catch (error) {
  helpers.logToError(error, req, 'Error in Update Profile Picture')
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


exports.addFriend = async (req, res) => {
 try {
  const isInValid = helpers.handleValidationErrors(req);
  if (isInValid) {
   return res.status(StatusCodes.BAD_REQUEST).json({
    ...baseResponse,
    ...isInValid
   })
   return
  }
  const json = await userService.addFriend(req, res);
  res.status(StatusCodes.OK).json({
   ...baseResponse,
   success: true,
   data: json,
   error: false,
   timestamp: Date.now(),
   code: StatusCodes.OK
  })
 } catch (error) {
  helpers.logToError(error, req, 'Error in Add Friend')
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

