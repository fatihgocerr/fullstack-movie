const express = require('express');
const router = express.Router();

const {directorController} = require('../controllers');
const {directorValidator} = require('../validations');
const authCheck = require("../middleware/auth.middleware");

router.get('/all', directorController.getAllDirectors);
router.get('/allPagination', directorValidator.validateListPagination(), directorController.getAllDirectorWithPagination);
router.get('/getById/:id', directorValidator.validateGetById(), directorController.getById);

router.post('/create', authCheck(['admin']), directorValidator.validateCreate(), directorController.createDirector)

router.put('/updateById/:id', authCheck(['admin']), directorValidator.validateUpdateById(), directorController.updateDirectorById);
router.delete('/deleteById/:id', authCheck(['admin']), directorValidator.validateDeleteById(), directorController.deleteById);


module.exports = router;