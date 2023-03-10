const express = require('express');
const router = express.Router();
const rewardsController = require('../controllers/rewards.controller');

router.get('/:id', rewardsController.getRewardByID);

module.exports = router;