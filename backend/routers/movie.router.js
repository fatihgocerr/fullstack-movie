const express = require('express');
const router = express.Router();

const {movieController} = require('../controllers');
const {moviesValidator, uploadsValidator, scoreValidator} = require('../validations')
const authCheck = require("../middleware/auth.middleware");


router.get('/', (req, res) => {
 res.send('Hello World!');
})
router.get('/yo', (req, res) => {
 res.send('Bugün kendiniz için ne yaptınız?!');
})

router.get('/all', movieController.getAllMovies);
router.get('/allPagination', moviesValidator.validateListPagination(), movieController.getAllMoviesWithPagination);
router.get('/getById/:id', moviesValidator.validateGetById(), movieController.getById);

router.post('/create', authCheck(['admin']), moviesValidator.validateCreate(), movieController.createMovie);

router.put('/updateById/:id', authCheck(['admin']), moviesValidator.validateUpdateById(), movieController.updateMovieById);

router.delete('/deleteById/:id', authCheck(['admin']), moviesValidator.validateDeleteById(), movieController.deleteMovieById);

router.post('/uploadImage/:id', authCheck(['admin']), uploadsValidator.validateUpload(), movieController.uploadImage); //Ayrı Middleware Yazılacak
router.post('/updateImage/:id', authCheck(['admin']), uploadsValidator.validateUpload(), movieController.updateImage); //Ayrı Middleware Yazılacak


router.put('/updateScore/:id', authCheck(['admin', 'user']), scoreValidator.validateUpdateScore(), movieController.updateScore); //Ayrı Middleware Yazılacak
router.get('/getScore/:id', scoreValidator.validateGetScore(), movieController.getScore); //Ayrı Middleware Yazılacak

module.exports = router;