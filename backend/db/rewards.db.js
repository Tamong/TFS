const getRewardInfoDb = async () => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Reward.SelectAll`;";

    pool.query(qry, (err, result) => {
      if (err) reject(err);
      resolve(result);
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

const claimRewardDb = async (txnhash, ee_id, reward_id, desc_ids) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.tfscoin.Reward_order.Insert(?, ?, ?, ?, ?);";

    pool.query(
      qry,
      [
        txnhash,
        ee_id,
        reward_id,
        desc_ids[0],
        desc_ids[1],
      ],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};

const addRewardDb = async (reward) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Reward_desc.Insert`(?, ?, ?);";

    pool.query(
      qry,
      [reward.reward_id, reward.desc_type, reward.desc_value],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};

module.exports = {
  getRewardInfoDb,
  getRewardInfoByIdDb,
  claimRewardDb,
  addRewardDb,
};
