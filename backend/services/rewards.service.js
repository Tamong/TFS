const rewardDb = require("../db/rewards.db");
const userDb = require("../db/users.db");
const blockchain = require("../contract/blockchain");

const getRewards = async () => {
  try {
    return await rewardDb.getRewardsDb();
  } catch (e) {
    throw Error(e);
  }
};

const getRewardByID = async (rewardId) => {
  try {
    return await rewardDb.getRewardInfoByIdDb(rewardId);
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
    const receipt = await blockchain.claimReward(
      userInfo.wallet_address,
      reward_id,
      rewardInfo.coin_price
    );
    console.log("transactionHash is " + receipt.transactionHash);
    // add reward order to db
    for (const desc_id of desc_ids) {
      await rewardDb.claimRewardDb(
        receipt.transactionHash,
        ee_id,
        reward_id,
        desc_id
      );
    }
    // Update Inventory
    await rewardDb.updateInventoryDb(reward_id);
    return receipt.transactionHash;
  } catch (e) {
    throw Error(e);
  }
};

const addReward = async (
  title,
  coin_price,
  inventory,
  img_url,
  descriptions
) => {
  try {
    let rewardInfo = await rewardDb.addRewardDb(
      title,
      coin_price,
      inventory,
      img_url
    );
    for (let i = 0; i < descriptions.length; i++) {
      let description = descriptions[i];
      await rewardDb.addRewardDescDb(
        rewardInfo.reward_id,
        description.desc_type,
        description.desc_value
      );
    }

    let receipt = await blockchain.addReward(rewardInfo.reward_id);
    console.log("Transaction Hash: ", receipt.transactionHash);
    return rewardInfo;
  } catch (e) {
    throw Error(e);
  }
};

const addRewardDescription = async (id, type, value) => {
  try {
    return await rewardDb.addRewardDescDb(id, type, value);
  } catch (e) {
    throw Error(e);
  }
};

const getRewardDescriptions = async (id) => {
  try {
    let descriptions = await rewardDb.getRewardDescriptionsDb(id);
    const grouped = descriptions.reduce((acc, item) => {
      const key = item.desc_type;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
    return grouped;
  } catch (e) {
    throw Error(e);
  }
};

const getClaimedRewards = async () => {
  try {
    return await rewardDb.getClaimedRewardsDb();
  } catch (e) {
    throw Error(e);
  }
};

module.exports = {
  getRewards,
  getRewardByID,
  claimReward,
  addReward,
  addRewardDescription,
  getRewardDescriptions,
  getClaimedRewards,
};
