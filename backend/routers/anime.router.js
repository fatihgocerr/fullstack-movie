const express = require('express')
const {animeService} = require("../services");

const router = express.Router();

const {animeController} = require('../controllers');
const {animeValidator} = require('../validations');

router.get('/all', animeController.getAll)
router.get('/allPagination',animeValidator.validateListPagination(),animeController.getAllWithPagination)
router.get('/getById/:id',animeValidator.validateGetById(),animeController.getById)

router.post('/create',animeValidator.validateCreate(), animeController.create)
router.put('/updateById/:id',animeValidator.validateUpdateById(), animeController.updateById)

router.delete('/deleteById/:id',animeValidator.validateDeleteById(),animeController.deleteById)


router.post('/uploadImage/:id', animeController.uploadImage) //Ayrı Middleware yazılacak
router.post('/updateImage/:id', animeController.updateImage) //Ayrı Middleware yazılacak


router.put('/updateScore/:id', animeController.updateScore); //Ayrı Middleware yazılacak
router.get('/getScore/:id', animeController.getScore); //Ayrı Middleware yazılacak




module.exports = router;


