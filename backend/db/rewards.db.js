const getRewardInfoDb = async (id) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Reward.SelectAll`;";

    pool.query(qry, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  getRewardInfoDb,
};
