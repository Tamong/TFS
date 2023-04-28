const express = require("express");
const router = express.Router();
const rewardsController = require("../../controllers/rewards.controller");

router.get("/", rewardsController.getRewards);
router.post("/claim", rewardsController.claimReward);
router.post("/add", rewardsController.addReward);

module.exports = router;
