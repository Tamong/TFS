const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balances.controller');

router.get('/user/:username', balanceController.getBalanceByUsername);
router.get('/id/:id', balanceController.getBalanceById);
router.get('/wallet/:wallet', balanceController.getBalanceByAddr);

module.exports = router;
