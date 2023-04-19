const express = require('express');
const router = express.Router();

const {starController} = require('../controllers');

router.get('/all', starController.getAllStars);
router.get('/allPagination', starController.getAllStarWithPagination);
router.get('/getById/:id', starController.getById);

router.post('/create', starController.createStar)

router.put('/updateById/:id', starController.updateById);
router.delete('/deleteById/:id', starController.deleteById);


module.exports = router;