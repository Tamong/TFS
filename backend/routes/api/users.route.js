const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users.controller');

// /api/user/

router.post('/approve', userController.postApproveUser);
router.post('/newwallet', userController.testWalletCreation);
router.post('/:id/checkin', userController.postUserCheckIn);
router.get('/:id/checkin', userController.getUserCheckInCount);
router.get('/:id', userController.getUserByID);
router.post('/', userController.postCreateUser);

module.exports = router;