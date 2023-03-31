const express = require('express');
const router = express.Router();
const loginController = require('../controllers/logins.controller');

router.get('/', loginController.getLoginByUserPass);

module.exports = router;