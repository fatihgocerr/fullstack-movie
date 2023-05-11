const { body, param, query } = require('express-validator');

const scriptwriterValidator = {
 validateCreate() {
  return [
   body('name').notEmpty().withMessage('name is required'),
   body('surname').notEmpty().withMessage('surname is required'),
   body('birthDate').notEmpty().withMessage('birthDate is required'),
   body('birthPlace').notEmpty().withMessage('birthPlace is required'),
   body('deathDate').notEmpty().withMessage('deathDate is required'),
   body('deathPlace').notEmpty().withMessage('deathPlace is required'),
   body('biography').notEmpty().withMessage('biography is required'),
   body('gender').notEmpty().withMessage('gender is required'),
   body('awards').notEmpty().withMessage('awards is required'),
   body('nationality').notEmpty().withMessage('nationality is required')
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

module.exports = scriptwriterValidator;