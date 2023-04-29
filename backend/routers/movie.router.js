const express = require('express');
const router = express.Router();

const {movieController} = require('../controllers');
const {moviesValidator} = require('../validations')
router.get('/', (req, res) => {
 res.send('Hello World!');
})
router.get('/yo', (req, res) => {
 res.send('Bugün kendiniz için ne yaptınız?!');
})

router.get('/all', movieController.getAllMovies);
router.get('/allPagination',moviesValidator.validateUpdateById(), movieController.getAllMoviesWithPagination);
router.get('/getById/:id',moviesValidator.validateGetById(), movieController.getById);

router.post('/create',moviesValidator.validateCreate(), movieController.createMovie);

router.put('/updateById/:id',moviesValidator.validateUpdateById(), movieController.updateMovieById);

router.delete('/deleteById/:id',moviesValidator.validateDeleteById(), movieController.deleteMovieById);

router.post('/uploadImage/:id', movieController.uploadImage); //Ayrı Middleware Yazılacak
router.post('/updateImage/:id', movieController.updateImage); //Ayrı Middleware Yazılacak


router.put('/updateScore/:id', movieController.updateScore); //Ayrı Middleware Yazılacak
router.get('/getScore/:id', movieController.getScore); //Ayrı Middleware Yazılacak

module.exports = router;