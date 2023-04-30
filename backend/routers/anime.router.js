const express = require('express')
const {animeService} = require("../services");

const router = express.Router();

const {animeController} = require('../controllers');
const {animeValidator, uploadsValidator, scoreValidator} = require('../validations');

router.get('/all', animeController.getAll)
router.get('/allPagination', animeValidator.validateListPagination(), animeController.getAllWithPagination)
router.get('/getById/:id', animeValidator.validateGetById(), animeController.getById)

router.post('/create', animeValidator.validateCreate(), animeController.create)
router.put('/updateById/:id', animeValidator.validateUpdateById(), animeController.updateById)

router.delete('/deleteById/:id', animeValidator.validateDeleteById(), animeController.deleteById)


router.post('/uploadImage/:id', uploadsValidator.validateUpload(), animeController.uploadImage) //Ayrı Middleware yazılacak
router.post('/updateImage/:id', uploadsValidator.validateUpload(), animeController.updateImage) //Ayrı Middleware yazılacak


router.put('/updateScore/:id', scoreValidator.validateUpdateScore(), animeController.updateScore); //Ayrı Middleware yazılacak
router.get('/getScore/:id', scoreValidator.validateGetScore(), animeController.getScore); //Ayrı Middleware yazılacak


module.exports = router;


