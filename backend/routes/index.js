const express = require('express');
const router = express.Router();

const apiRouter = require('./api/index');
const loginController = require('../controllers/logins.controller');
const userController = require('../controllers/users.controller')

router.use('/api', apiRouter);
router.post('/login', loginController.postLoginByUserPass);
router.post('/register', userController.postCreateUser);

module.exports = router;