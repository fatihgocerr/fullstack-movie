const {body, param, query} = require('express-validator');


const seriesValidator = {
 validateCreate () {
  return [
   body('name').notEmpty().withMessage('name is required'),
   body('genre').notEmpty().isMongoId().withMessage('genre is required'),
   body('visionDate').notEmpty().withMessage('visionDate is required'),
   body('directorId').notEmpty().isMongoId().withMessage('director is required'),
   body('stars').notEmpty().isMongoId().withMessage('stars is required'),
   body('scriptwriter').notEmpty().isMongoId().withMessage('scriptwriter is required'),
   body('trailer').notEmpty().withMessage('trailer is required'),
   // body('summary').notEmpty().withMessage('summary is required'),
   // body('poster').notEmpty().withMessage('poster is required'),
   // body('bannerPoster').notEmpty().withMessage('bannerPoster is required'),
   // body('budget').notEmpty().withMessage('budget is required'),
   // body('boxOffice').notEmpty().withMessage('boxOffice is required'),
   body('year').notEmpty().withMessage('year is required'),
   body('country').notEmpty().withMessage('country is required'),
   body('language').notEmpty().withMessage('language is required'),
   body('producer').notEmpty().withMessage('producer is required'),
  ]
 },
 validateGetById () {
  return[   param('id').isMongoId().withMessage('Invalid Id')  ]
 },
 validateUpdateById () {
  return[   param('id').isMongoId().withMessage('Invalid Id')  ]
 },
 validateDeleteById () {
  return[   param('id').isMongoId().withMessage('Invalid Id')  ]
 },
 validateListPagination () {
  return [
   query('perPage').notEmpty().isNumeric().withMessage('PerPage must be a number'),
   query('page').notEmpty().isNumeric().withMessage('Page must be a number'),
   query('limit').notEmpty().withMessage('Limit must be a number'),
   query('sort').notEmpty().isString().withMessage('Sort must be a string'),
  ]
 },
}



module.exports = seriesValidator;