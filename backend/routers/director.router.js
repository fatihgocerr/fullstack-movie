const express = require('express');
const router = express.Router();

const {directorController} = require('../controllers');

router.get('/all', directorController.getAllDirectors);
router.get('/allPagination', directorController.getAllDirectorWithPagination);
router.get('/getById/:id', directorController.getById);

router.post('/create', directorController.createDirector)

router.put('/updateById/:id', directorController.updateDirectorById);
router.delete('/deleteById/:id', directorController.deleteById);


module.exports = router;