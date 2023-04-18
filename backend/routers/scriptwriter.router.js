const express = require('express');
const router = express.Router();

const {scriptwriterController} = require('../controllers');

router.get('/all', scriptwriterController.getAllScriptwriters);
router.get('/allPagination', scriptwriterController.getAllScriptwriterWithPagination);
router.get('/getById/:id', scriptwriterController.getScriptwriterById);

router.post('/create', scriptwriterController.createScriptwriter)

router.put('/updateById/:id', scriptwriterController.updateScriptwriterById);
router.delete('/deleteById/:id', scriptwriterController.deleteScriptwriterById);


module.exports = router;