const express = require("express");
const router = express.Router();
const rewardsController = require("../../controllers/rewards.controller");

router.get("/", rewardsController.getRewards);
router.post("/", rewardsController.postReward)
router.post("/claim", rewardsController.claimReward);
router.get("/:id/descriptions", rewardsController.getRewardDescriptions);
router.post("/:id/descriptions", rewardsController.postRewardDescription);
router.get("/:id", rewardsController.getRewardById);

module.exports = router;
