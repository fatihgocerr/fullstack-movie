const express = require('express')

const router = express.Router();

const {seriesController, movieController} = require('../controllers');
const {seriesValidator} = require('../validations');

router.get('/all', seriesController.getAll)
router.get('/allPagination',seriesValidator.validateListPagination(),seriesController.getAllWithPagination)
router.get('/getById/:id',seriesValidator.validateGetById(),seriesController.getById)

router.post('/create', seriesValidator.validateCreate(), seriesController.create)
router.put('/updateById/:id', seriesValidator.validateUpdateById(), seriesController.updateById)

router.delete('/deleteById/:id',seriesValidator.validateDeleteById(),seriesController.deleteById)


router.post('/uploadImage/:id', seriesController.uploadImage) //Ayrı Middleware yazılacak
router.post('/updateImage/:id', seriesController.updateImage) //Ayrı Middleware Yazılacak


router.put('/updateScore/:id', seriesController.updateScore); //Ayrı Middleware Yazılacak
router.get('/getScore/:id', seriesController.getScore); //Ayrı Middleware Yazılacak




module.exports = router;


