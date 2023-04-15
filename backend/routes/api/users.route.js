const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users.controller');

// /api/user/approve

router.post('/approve', userController.postApproveUser);
router.post('/', userController.postCreateUser);
router.post('/testing', userController.testWalletCreation);
router.post('/:id/checkin', userController.postUserCheckIn);
router.get('/:id', userController.getUserByID);

module.exports = router;