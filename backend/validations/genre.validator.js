const {body, param, query} = require('express-validator');

const genreValidator = {
 validateCreate() {
  return [
   body('name').notEmpty().withMessage('name is required'),
   body('description').notEmpty().withMessage('description is required'),

  ]
 },
 validateGetById() {
  return [param('id').isMongoId().withMessage('Invalid Id')]
 },
 validateUpdateById() {
  return [param('id').isMongoId().withMessage('Invalid Id')]
 },
 validateDeleteById() {
  return [param('id').isMongoId().withMessage('Invalid Id')]
 },
 validateListPagination() {
  return [
   query('perPage').notEmpty().isNumeric().withMessage('PerPage must be a number'),
   query('page').notEmpty().isNumeric().withMessage('Page must be a number'),
   query('limit').notEmpty().withMessage('Limit must be a number'),
   query('sort').notEmpty().isString().withMessage('Sort must be a string'),
  ]
 },

}

module.exports = genreValidator;