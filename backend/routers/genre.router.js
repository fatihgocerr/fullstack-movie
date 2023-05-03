const express = require('express');
const router = express.Router();

const {genreController} = require('../controllers');
const {genreValidator} = require('../validations');
const authCheck = require("../middleware/auth.middleware");

router.get('/all', genreController.getAllGenres);
router.get('/allPagination', genreValidator.validateListPagination(), genreController.getAllGenresWithPagination);
router.get('/getById/:id', genreValidator.validateGetById(), genreController.getById);

router.post('/create', authCheck(['admin']), genreValidator.validateCreate(), genreController.createGenre)

router.put('/updateById/:id', authCheck(['admin']), genreValidator.validateUpdateById(), genreController.updateById);
router.delete('/deleteById/:id', authCheck(['admin']), genreValidator.validateDeleteById(), genreController.deleteById);


module.exports = router;