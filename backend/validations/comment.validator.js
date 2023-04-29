const {body, param, query} = require('express-validator');

const commentValidator = {
 validateCreate() {
  return [
   body('userId').notEmpty().withMessage('userId is required'),
   body('contentId.kind').notEmpty().withMessage('contentId.kind is required'),
   body('contentId.item').notEmpty().withMessage('contentId.id is required'),
   body('contentComment').notEmpty().withMessage('contentComment is required'),
   body('date').notEmpty().withMessage('date is required')
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

module.exports = commentValidator;