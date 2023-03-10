const express = require('express');
const router = express.Router();
const userRouter = require('./users.route');
const rewardsRouter = require('./rewards.route');
/*
const userRouter = require('./users.route');
const userRouter = require('./users.route');*/


// api/
router.use('/user', userRouter);
router.use('/reward', rewardsRouter);
/*router.use('/tokens', userController);
router.use('/test', userController);*/

module.exports = router;