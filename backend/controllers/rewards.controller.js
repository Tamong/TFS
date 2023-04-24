const rewardService = require("../services/rewards.service");

const getRewards = async (req, res, next) => {
  try {
    let rewardInfo = await rewardService.getRewardInfo();
    res.status(200).json(rewardInfo) && next();
  } catch (e) {
    res.sendStatus(500) && next();
  }
};

module.exports = {
  getRewards,
};
