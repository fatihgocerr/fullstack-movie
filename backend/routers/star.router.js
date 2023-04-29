const express = require('express');
const router = express.Router();

const {starController} = require('../controllers');
const {starValidator} = require('../validations');

router.get('/all', starController.getAllStars);
router.get('/allPagination', starValidator.validateListPagination(), starController.getAllStarWithPagination);
router.get('/getById/:id', starValidator.validateGetById(), starController.getById);

router.post('/create', starValidator.validateCreate(), starController.createStar)

router.put('/updateById/:id',starValidator.validateUpdateById(), starController.updateById);
router.delete('/deleteById/:id', starValidator.validateDeleteById(), starController.deleteById);


module.exports = router;