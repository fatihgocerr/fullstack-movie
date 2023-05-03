const express = require('express')

const router = express.Router();

const {seriesController, movieController} = require('../controllers');
const {seriesValidator, uploadsValidator, scoreValidator} = require('../validations');
const authCheck = require("../middleware/auth.middleware");

router.get('/all', seriesController.getAll)
router.get('/allPagination', seriesValidator.validateListPagination(), seriesController.getAllWithPagination)
router.get('/getById/:id', seriesValidator.validateGetById(), seriesController.getById)

router.post('/create', authCheck(['admin']), seriesValidator.validateCreate(), seriesController.create)
router.put('/updateById/:id', authCheck(['admin']), seriesValidator.validateUpdateById(), seriesController.updateById)

router.delete('/deleteById/:id', authCheck(['admin']), seriesValidator.validateDeleteById(), seriesController.deleteById)


router.post('/uploadImage/:id', authCheck(['admin']), uploadsValidator.validateUpload(), seriesController.uploadImage) //Ayrı Middleware yazılacak
router.post('/updateImage/:id', authCheck(['admin']), uploadsValidator.validateUpload(), seriesController.updateImage) //Ayrı Middleware Yazılacak


router.put('/updateScore/:id', authCheck(['admin', 'user']), scoreValidator.validateUpdateScore(), seriesController.updateScore); //Ayrı Middleware Yazılacak
router.get('/getScore/:id', scoreValidator.validateGetScore(), seriesController.getScore); //Ayrı Middleware Yazılacak


module.exports = router;


