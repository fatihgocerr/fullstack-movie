const express = require('express');
const router = express.Router();

const {commentController} = require('../controllers');


router.get('/all', commentController.getAllComments);
router.get('/allPagination', commentController.getAllWithPagination)
router.get('/getById/:id',commentController.getById)


router.post('/create', commentController.createComment);

router.put('/updateById/:id', commentController.updateById);
router.delete('/deleteById/:id',commentController.deleteById)



module.exports = router;