const rewardDb = require("../db/rewards.db");
const userDb = require("../db/users.db");
const blockchain = require("../contract/blockchain");

const getRewardInfo = async () => {
  try {
    return await rewardDb.getRewardInfoDb();
  } catch (e) {
    throw Error(e);
  }
};

const claimReward = async (rewardInfo) => {
  try {
    /*
    Outline of what this function should do:
    1. Get the user's info from the database (ee_id, wallet_address, private?)
    2. Get the reward info from the database (rewardInfo.reward_id) 
      return inventory, reward_id ? individual reward based on reward_id    
    3. call blockchain.claimReward(userInfo, rewardInfo)
    4. call rewardDb.claimRewardDb(txnhash, rewardInfo) to save the reward order
    */
    const userInfo = await userDb.getUserByIdDb(rewardInfo.ee_id);
    console.log(userInfo);
    const txnhash = await blockchain.claimReward(userInfo, rewardInfo);
    return await rewardDb.claimRewardDb(txnhash, rewardInfo);
  } catch (e) {
    throw Error(e);
  }
};

module.exports = {
  getRewardInfo,
  claimReward,
};
