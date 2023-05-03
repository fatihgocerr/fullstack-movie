const express = require('express');
const router = express.Router();

const {scriptwriterController} = require('../controllers');
const {scriptwriterValidator} = require('../validations');
const authCheck = require("../middleware/auth.middleware");

router.get('/all', scriptwriterController.getAllScriptwriters);
router.get('/allPagination', scriptwriterValidator.validateListPagination(), scriptwriterController.getAllScriptwriterWithPagination);
router.get('/getById/:id', scriptwriterValidator.validateGetById(), scriptwriterController.getById);

router.post('/create',authCheck(['admin']), scriptwriterValidator.validateCreate(), scriptwriterController.createScriptwriter)

router.put('/updateById/:id',authCheck(['admin']), scriptwriterValidator.validateUpdateById(), scriptwriterController.updateById);
router.delete('/deleteById/:id',authCheck(['admin']), scriptwriterValidator.validateDeleteById(), scriptwriterController.deleteById);


module.exports = router;