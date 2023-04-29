const express = require('express');
const router = express.Router();

const {genreController} = require('../controllers');
const {genreValidator} = require('../validations');

router.get('/all', genreController.getAllGenres);
router.get('/allPagination', genreValidator.validateListPagination(), genreController.getAllGenresWithPagination);
router.get('/getById/:id',genreValidator.validateGetById(), genreController.getById);

router.post('/create', genreValidator.validateCreate(), genreController.createGenre)

router.put('/updateById/:id',genreValidator.validateUpdateById(), genreController.updateById);
router.delete('/deleteById/:id', genreValidator.validateDeleteById(), genreController.deleteById);


module.exports = router;