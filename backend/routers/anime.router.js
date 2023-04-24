const express = require('express')
const {animeService} = require("../services");

const router = express.Router();

const {animeController} = require('../controllers');


router.get('/all', animeController.getAll)
router.get('/allPagination',animeController.getAllWithPagination)
router.get('/getById/:id',animeController.getById)

router.post('/create', animeController.create)
router.put('/updateById/:id', animeController.updateById)

router.delete('/deleteById/:id',animeController.deleteById)


router.post('/uploadImage/:id', animeController.uploadImage)
router.post('/updateImage/:id', animeController.updateImage)


router.put('/updateScore/:id', animeController.updateScore);
router.get('/getScore/:id', animeController.getScore);




module.exports = router;


