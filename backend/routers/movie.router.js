const express = require('express');
const router = express.Router();

const {movieController} = require('../controllers');

router.get('/', (req, res) => {
 res.send('Hello World!');
})

router.get('/all', movieController.getAllMovies);
router.get('/allPagination', movieController.getAllMoviesWithPagination);
router.get('/getById/:id', movieController.getMovieById);

router.post('/create', movieController.createMovie);

router.put('/updateById/:id', movieController.updateMovieById);

router.delete('/deleteById/:id', movieController.deleteMovieById);




module.exports = router;