const express = require('express');
const router = express.Router();

const {commentController} = require('../controllers');
const {commentValidator} = require('../validations');
const authCheck = require("../middleware/auth.middleware");

router.get('/all', commentController.getAllComments);
router.get('/allPagination', commentValidator.validateListPagination(), commentController.getAllWithPagination)
router.get('/getById/:id', commentValidator.validateGetById(), commentController.getById)


router.post('/create', authCheck(['admin', 'user']), commentValidator.validateCreate(), commentController.createComment);

router.put('/updateById/:id', authCheck(['admin', 'user']), commentValidator.validateUpdateById(), commentController.updateById);
router.delete('/deleteById/:id', authCheck(['admin', 'user']), commentValidator.validateDeleteById(), commentController.deleteById)


module.exports = router;