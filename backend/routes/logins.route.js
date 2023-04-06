const express = require('express');
const router = express.Router();
const loginController = require('../controllers/logins.controller');

router.post('/', loginController.postLoginByUserPass);

module.exports = router;
