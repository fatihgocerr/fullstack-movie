const express = require('express');
const router = express.Router();

const {genreController} = require('../controllers');

router.get('/all', genreController.getAllGenres);
router.get('/allPagination', genreController.getAllGenresWithPagination);
router.get('/getById/:id', genreController.getById);

router.post('/create', genreController.createGenre)

router.put('/updateById/:id', genreController.updateById);
router.delete('/deleteById/:id', genreController.deleteById);


module.exports = router;