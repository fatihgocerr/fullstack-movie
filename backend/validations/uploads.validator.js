const { body, param, query } = require('express-validator');

const uploadsValidator = {
 validateUpload() {
  return [
   param('id').isMongoId().withMessage('Invalid Id'),
  ]
 }
}


module.exports = uploadsValidator;