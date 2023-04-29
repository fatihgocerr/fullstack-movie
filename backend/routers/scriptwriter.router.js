const express = require('express');
const router = express.Router();

const {scriptwriterController} = require('../controllers');
const {scriptwriterValidator} = require('../validations');

router.get('/all', scriptwriterController.getAllScriptwriters);
router.get('/allPagination', scriptwriterValidator.validateListPagination(), scriptwriterController.getAllScriptwriterWithPagination);
router.get('/getById/:id', scriptwriterValidator.validateGetById(), scriptwriterController.getById);

router.post('/create', scriptwriterValidator.validateCreate(), scriptwriterController.createScriptwriter)

router.put('/updateById/:id', scriptwriterValidator.validateUpdateById(), scriptwriterController.updateById);
router.delete('/deleteById/:id', scriptwriterValidator.validateDeleteById(), scriptwriterController.deleteById);


module.exports = router;