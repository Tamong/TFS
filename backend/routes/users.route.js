const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

router.post('/testing', userController.testWalletCreation);
router.get('/:id', userController.getUserByID);

module.exports = router;