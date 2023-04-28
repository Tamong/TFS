const rewardService = require("../services/rewards.service");

const getRewards = async (req, res, next) => {
  try {
    let rewardInfo = await rewardService.getRewardInfo();
    res.status(200).json(rewardInfo) && next();
  } catch (e) {
    res.sendStatus(500) && next();
  }
};

const claimReward = async (req, res, next) => {
  const {ee_id, reward_id, desc_ids} = req.body;
  if(!ee_id || !reward_id){
    res.sendStatus(400);
    return;
  }
  try {
    let rewardInfo = await rewardService.claimReward(ee_id, reward_id, desc_ids);
    res.status(200).json(rewardInfo) && next();
  } catch (e) {
    res.sendStatus(500) && next();
  }
};

const addReward = async (req, res, next) => {
  try {
    let rewardInfo = await rewardService.addReward(req.body);
    res.status(200).json(rewardInfo) && next();
  } catch (e) {
    res.sendStatus(500) && next();
  }
};

module.exports = {
  getRewards,
  claimReward,
  addReward,
};
