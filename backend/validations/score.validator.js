const {body, param, query} = require('express-validator');


const scoreValidator = {
 validateUpdateScore () {
  return [
   param('id').isMongoId().withMessage('Invalid Id'),
   body('userScore').notEmpty().withMessage('score is required'),
  ]
 },
 validateGetScore () {
  return [
   param('id').isMongoId().withMessage('Invalid Id'),
  ]
 }
}

module.exports = scoreValidator;