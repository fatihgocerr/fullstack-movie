const {StatusCodes} = require('http-status-codes');
const helpers = require('../utils/helpers');
const authCheck = (role) => {
 return (req, res, next) => {

   if (!req.headers.authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
     message: ' Unauthorized',
    });
   }
  try {
   const token =helpers.decodeToken(req.headers.authorization.split(' ')[1]);
   const userRole = token.decodeToken.role;
   if (!role.includes(userRole)) {
    throw new Error('Unauthorized access');
   }
   req.userData = {userId: token.decodeToken.userId};
   next();
  } catch (error) {
   return res.status(StatusCodes.UNAUTHORIZED).json({
    message: ' Unauthorized',
   });
  }
 };
}

module.exports = authCheck;