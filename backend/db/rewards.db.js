const getRewardsDb = async () => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Reward.SelectAll`;";

    pool.query(qry, (err, result) => {
      if (err) reject(err);
      resolve(result[0]);
    });
  });
};

const getRewardInfoByIdDb = async (reward_id) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Reward.SelectBy.reward_id`(?);";

    pool.query(qry, [reward_id], (err, result) => {
      if (err) reject(err);
      resolve(result[0][0]);
    });
  });
};

const claimRewardDb = async (txnhash, ee_id, reward_id, desc_id) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Reward_order.Insert`(?, ?, ?, ?);";

    pool.query(qry, [ee_id, txnhash, reward_id, desc_id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const updateInventoryDb = async (reward_id) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Reward.UpdateInventoryBy.reward_id`(?)";

    pool.query(qry, [reward_id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const addRewardDb = async (title, coin_price, inventory, img_url) => {
  return new Promise((resolve, reject) => {
    const qry = "CALL tfscoin.`tfscoin.Reward.Insert`(?, ?, ?, ?);";
    pool.query(qry, [title, coin_price, inventory, img_url], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0][0]);
      }
    });
  });
};

const addRewardDescDb = async (reward_id, desc_type, desc_value) => {
  return new Promise((resolve, reject) => {
    const qry = "CALL tfscoin.`tfscoin.Reward_desc.Insert`(?, ?, ?);";

    pool.query(qry, [reward_id, desc_type, desc_value], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getRewardDescriptionsDb = async (rewardId) => {
  return new Promise((resolve, reject) => {
    const qry = "CALL tfscoin.`tfscoin.Reward_desc.SelectBy.reward_id`(?);";

    pool.query(qry, [rewardId], (err, result) => {
      if (err) reject(err);
      resolve(result[0]);
    });
  });
};

const getClaimedRewardsDb = async () => {
  return new Promise((resolve, reject) => {
    const qry = "CALL tfscoin.`tfscoin.Reward_order.SelectAll`;";
    pool.query(qry, (err, result) => {
      if (err) reject(err);
      resolve(result[0]);
    });
  });
};

module.exports = {
  getRewardsDb,
  getRewardInfoByIdDb,
  claimRewardDb,
  updateInventoryDb,
  addRewardDb,
  addRewardDescDb,
  getRewardDescriptionsDb,
  getClaimedRewardsDb,
};
