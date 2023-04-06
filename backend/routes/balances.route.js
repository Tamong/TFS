const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balances.controller');

router.get('/:username', balanceController.getBalanceByUser);

module.exports = router;
