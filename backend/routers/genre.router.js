const express = require('express');
const router = express.Router();

const {genreController} = require('../controllers');

router.get('/all', genreController.getAllGenres);
router.get('/allPagination', genreController.getAllGenresWithPagination);
router.get('/getById/:id', genreController.getGenreById);

router.post('/create', genreController.createGenre)

router.put('/updateById/:id', genreController.updateGenreById);
router.delete('/deleteById/:id', genreController.deleteGenreById);


module.exports = router;