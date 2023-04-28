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

const claimReward = async (ee_id, reward_id, desc_ids) => {
  try {
    /*
    Outline of what this function should do:
    1. Get the user's info from the database (ee_id, wallet_address, private?)
    2. Get the reward info from the database (rewardInfo.reward_id) 
      return inventory, reward_id ? individual reward based on reward_id    
    3. call blockchain.claimReward(userInfo, rewardInfo)
    4. call rewardDb.claimRewardDb(txnhash, rewardInfo) to save the reward order
    */
    const userInfo = await userDb.getUserByIdDb(ee_id);
    const userBalance = await blockchain.getWalletBalance(
      userInfo.wallet_address
    );
    const rewardInfo = await rewardDb.getRewardInfoByIdDb(reward_id);
    if (userBalance < rewardInfo.coin_price) {
      return { error: "Insufficient balance" };
    } else {
      if (rewardInfo.inventory < 1) {
        return { error: "Reward out of stock" };
      }
    }
    const txnhash = await blockchain.claimReward(
      userInfo.wallet_address,
      reward_id
    );
    console.log("txnHash is " + txnhash);
    return await rewardDb.claimRewardDb(txnhash, ee_id, reward_id, desc_ids);
  } catch (e) {
    throw Error(e);
  }
};

const addReward = async (reward) => {
  try {
    return await rewardDb.addRewardDb(reward);
  } catch (e) {
    throw Error(e);
  }
};

module.exports = {
  getRewardInfo,
  claimReward,
  addReward,
};
