const express = require('express');

const router = express.Router();

const {userController} = require('../controllers');
const {userValidator} = require('../validations');

router.get('/gelAllUsers', userController.getAllUsers);
router.get('/getById/:id', userValidator.validateGetById(), userController.getUserById);
router.get('/allPagination', userValidator.validateListPagination(), userController.getAllUsersWithPagination)

router.post('/create', userValidator.validateCreate(), userController.createUser);

router.put('/updateById/:id', userValidator.validateUpdateById(), userController.updateUserById);
router.delete('/deleteById/:id', userValidator.validateDeleteById(), userController.deleteUserById);

router.post('/uploadPP/:id', userController.uploadPP);
router.put('/updatePP/:id', userController.updatePP);

router.post('/addFriend/:id', userValidator.validateAddFriend(), userController.addFriend)

router.post('/login', userController.login)

module.exports = router;