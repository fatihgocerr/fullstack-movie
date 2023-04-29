const express = require('express');
const router = express.Router();

const {commentController} = require('../controllers');
const {commentValidator} = require('../validations');

router.get('/all', commentController.getAllComments);
router.get('/allPagination', commentValidator.validateListPagination(), commentController.getAllWithPagination)
router.get('/getById/:id', commentValidator.validateGetById(), commentController.getById)


router.post('/create', commentValidator.validateCreate(), commentController.createComment);

router.put('/updateById/:id', commentValidator.validateUpdateById(), commentController.updateById);
router.delete('/deleteById/:id', commentValidator.validateDeleteById(), commentController.deleteById)


module.exports = router;