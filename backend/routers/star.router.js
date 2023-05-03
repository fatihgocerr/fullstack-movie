const express = require('express');
const router = express.Router();

const {starController} = require('../controllers');
const {starValidator} = require('../validations');
const authCheck = require("../middleware/auth.middleware");

router.get('/all', starController.getAllStars);
router.get('/allPagination', starValidator.validateListPagination(), starController.getAllStarWithPagination);
router.get('/getById/:id', starValidator.validateGetById(), starController.getById);

router.post('/create', authCheck(['admin']), starValidator.validateCreate(), starController.createStar)

router.put('/updateById/:id', authCheck(['admin']), starValidator.validateUpdateById(), starController.updateById);
router.delete('/deleteById/:id', authCheck(['admin']), starValidator.validateDeleteById(), starController.deleteById);


module.exports = router;

