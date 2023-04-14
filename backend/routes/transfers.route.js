const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transfers.controller');

router.post('/usernames', transferController.postTransferUsernames);

module.exports = router;
