const getRewardInfoDb = async (id) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Reward.SelectAll`;";

    pool.query(qry, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const claimRewardDb = async (txnhash, rewardInfo) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Reward_order.Insert`(?, ?, ?, ?, ?);";

    pool.query(
      qry,
      [
        txnhash,
        rewardInfo.ee_id,
        rewardInfo.reward_id,
        rewardInfo.desc_ids[0],
        rewardInfo.desc_ids[1],
      ],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};

module.exports = {
  getRewardInfoDb,
  claimRewardDb,
};
