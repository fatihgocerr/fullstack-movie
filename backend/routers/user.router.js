const express = require('express');

const router = express.Router();

const {userController} = require('../controllers');

router.get('/gelAllUsers', userController.getAllUsers);
router.get('/getById/:id', userController.getUserById);
router.get('/allPagination', userController.getAllUsersWithPagination)

router.post('/create', userController.createUser);

router.put('/updateById/:id', userController.updateUserById);
router.delete('/deleteById/:id', userController.deleteUserById);

router.post('/uploadPP/:id', userController.uploadPP);
router.put('/updatePP/:id', userController.updatePP);

router.post('/addFriend/:id',userController.addFriend)

router.post('/login',userController.login)

module.exports = router;