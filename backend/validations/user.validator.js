const { body, param, query } = require('express-validator');
const {userService} = require("../services");

const userValidator = {
 validateCreate() {
return [
 // body('username').notEmpty().withMessage('username is required'),
 // body('email').notEmpty().withMessage('email is required'),
 body('password').notEmpty().withMessage('password is required'),
 body('profile.name').notEmpty().withMessage('profile is required'),
 body('profile.surname').notEmpty().withMessage('profile is required'),
 body('profile.country').notEmpty().withMessage('profile is required'),
 // body('profile.language').notEmpty().withMessage('profile is required'),
 body('username').not().isEmpty().custom(async (value, {req}) => {
  const result = await userService.findByUserName(value);
  if (result) {
   throw new Error('User Name is already in use');
  }
  return true;
 }),
 body('email').not().isEmpty().custom(async (value, {req}) => {
  const result = await userService.findByEmail(value);
  if (result) {
   throw new Error('Email is already in use');
  }
  return true;
 }).withMessage('email is already in use'),
]
 },
 validateGetById() {
return [ param('id').isMongoId().withMessage('Invalid Id') ]
 },
 validateUpdateById() {
return [ param('id').isMongoId().withMessage('Invalid Id') ]
 },
 validateDeleteById() {
return [ param('id').isMongoId().withMessage('Invalid Id') ]
 },
 validateListPagination() {
return [
 query('perPage').notEmpty().isNumeric().withMessage('PerPage must be a number'),
 query('page').notEmpty().isNumeric().withMessage('Page must be a number'),
 query('limit').notEmpty().withMessage('Limit must be a number'),
 query('sort').notEmpty().isString().withMessage('Sort must be a string'),
 ]
 },
 validateAddFriend() {
return [
 param('id').isMongoId().withMessage('Invalid Id'),
 body('friendId').isMongoId().withMessage('Invalid Id')
 ]
 }

}

module.exports = userValidator;