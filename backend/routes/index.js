const express = require('express');
const router = express.Router();

const apiRouter = require('./api/index');
const loginController = require('../controllers/logins.controller');

router.use('/api', apiRouter);
router.post('/login', loginController.postLoginByUserPass);

module.exports = router;