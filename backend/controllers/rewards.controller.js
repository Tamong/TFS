const rewardService = require("../services/rewards.service");

const getRewards = async (req, res, next) => {
  try {
    let rewardInfo = await rewardService.getRewards();
    res.status(200).json(rewardInfo) && next();
  } catch (e) {
    res.sendStatus(500) && next();
  }
};

const getRewardById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let rewardInfo = await rewardService.getRewardByID(id);
    res.status(200).json(rewardInfo) && next();
  } catch (e) {
    res.sendStatus(500) && next();
  }
};

const postReward = async (req, res, next) => {
  const { title, coin_price, inventory, img_url, descriptions } = req.body;
  if (!title || !coin_price || !inventory || !img_url) {
    res.sendStatus(400);
    return;
  }
  try {
    let rewardInfo = await rewardService.addReward(
      title,
      coin_price,
      inventory,
      img_url,
      descriptions
    );
    res.status(200).json(rewardInfo) && next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

const claimReward = async (req, res, next) => {
  const { ee_id, reward_id, desc_ids } = req.body;
  if (!ee_id || !reward_id) {
    res.sendStatus(400);
    return;
  }
  try {
    let rewardInfo = await rewardService.claimReward(
      ee_id,
      reward_id,
      desc_ids
    );
    res.status(200).json(rewardInfo) && next();
  } catch (e) {
    res.sendStatus(500) && next();
  }
};

const getRewardDescriptions = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  try {
    let rewardDescriptions = await rewardService.getRewardDescriptions(id);
    res.status(200).json(rewardDescriptions) && next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

const postRewardDescription = async (req, res, next) => {
  const { id } = req.params;
  const { desc_type, desc_value } = req.body;
  if (!id || !desc_type || !desc_value) {
    res.sendStatus(400);
    return;
  }
  try {
    let rewardInfo = await rewardService.addRewardDescription(
      id,
      desc_type,
      desc_value
    );
    res.status(200).json(rewardInfo) && next();
  } catch (e) {
    res.sendStatus(500) && next();
  }
};

module.exports = {
  getRewards,
  claimReward,
  postReward,
  postRewardDescription,
  getRewardDescriptions,
  getRewardById,
};
