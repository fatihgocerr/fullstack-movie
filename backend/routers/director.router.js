const express = require('express');
const router = express.Router();

const {directorController} = require('../controllers');
const {directorValidator} = require('../validations');

router.get('/all', directorController.getAllDirectors);
router.get('/allPagination', directorValidator.validateListPagination(), directorController.getAllDirectorWithPagination);
router.get('/getById/:id', directorValidator.validateGetById(), directorController.getById);

router.post('/create', directorValidator.validateCreate(), directorController.createDirector)

router.put('/updateById/:id', directorValidator.validateUpdateById(), directorController.updateDirectorById);
router.delete('/deleteById/:id', directorValidator.validateDeleteById(), directorController.deleteById);


module.exports = router;