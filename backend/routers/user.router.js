const express = require('express');

const router = express.Router();

const {userController} = require('../controllers');
const {userValidator, uploadsValidator} = require('../validations');
const authCheck = require('../middleware/auth.middleware');

router.get('/gelAllUsers', authCheck(['admin']), userController.getAllUsers);
router.get('/getById/:id', authCheck(['admin', 'user']), userValidator.validateGetById(), userController.getUserById);
router.get('/allPagination', authCheck(['admin']), userValidator.validateListPagination(), userController.getAllUsersWithPagination)

router.post('/create', authCheck(['admin']), userValidator.validateCreate(), userController.createUser);

router.put('/updateById/:id', authCheck(['admin', 'user']), userValidator.validateUpdateById(), userController.updateUserById);
router.delete('/deleteById/:id', authCheck(['admin']), userValidator.validateDeleteById(), userController.deleteUserById);

router.post('/uploadPP/:id', authCheck(['admin', 'user']), uploadsValidator.validateUpload(), userController.uploadPP);
router.put('/updatePP/:id', authCheck(['admin', 'user']), uploadsValidator.validateUpload(), userController.updatePP);

router.post('/addFriend/:id', authCheck(['admin', 'user']), userValidator.validateAddFriend(), userController.addFriend)

router.post('/login', userController.login)

module.exports = router;