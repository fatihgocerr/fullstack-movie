const express = require('express')

const router = express.Router();

const {seriesController, movieController} = require('../controllers');


router.get('/all', seriesController.getAll)
router.get('/allPagination',seriesController.getAllWithPagination)
router.get('/getById/:id',seriesController.getById)

router.post('/create', seriesController.create)
router.put('/updateById/:id', seriesController.updateById)

router.delete('/deleteById/:id',seriesController.deleteById)


router.post('/uploadImage/:id', seriesController.uploadImage)
router.post('/updateImage/:id', seriesController.updateImage)


router.put('/updateScore/:id', seriesController.updateScore);
router.get('/getScore/:id', seriesController.getScore);




module.exports = router;


