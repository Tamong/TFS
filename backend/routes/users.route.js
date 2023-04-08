const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

router.post('/approve', userController.postApproveUser);
router.post('/', userController.postCreateUser);
router.post('/testing', userController.testWalletCreation);
router.get('/:id', userController.getUserByID);

module.exports = router;