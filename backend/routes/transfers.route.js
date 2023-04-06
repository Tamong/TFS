const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transfers.controller');

router.post('/', transferController.getTransfer);

module.exports = router;
