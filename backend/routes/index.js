const express = require('express');
const router = express.Router();

const userRouter = require('./users.route');
const rewardsRouter = require('./rewards.route');
const loginRouter = require('./logins.route');
const balanceRouter = require('./balances.route');
const transferRouter = require('./transfers.route');
/*
const userRouter = require('./users.route');*/


// api/
router.use('/user', userRouter);
router.use('/rewards', rewardsRouter);
router.use('/login', loginRouter);
router.use('/balance', balanceRouter);
router.use('/transfer', transferRouter);
/*router.use('/tokens', userController);
router.use('/test', userController);*/

module.exports = router;