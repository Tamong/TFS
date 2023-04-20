const createBountyDb = async (title, description, coinReward, isActive) => {
  return new Promise((resolve, reject) => {
    const qry = 'CALL tfscoin.Bug_bounty.Insert(?, ?, ?, ?);';

    pool.query(qry, [title, description, coinReward, isActive], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getBountyByIdDb = async (bountyId) => {
  return new Promise((resolve, reject) => {
    const qry = 'CALL tfscoin.Bug_Bounty.SelectBy.bounty_id(?);';

    pool.query(qry, [bountyId], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const deleteBountyByIdDb = async (bountyId) => {
  return new Promise((resolve, reject) => {
    const qry = 'CALL tfscoin.Bug_Bounty.DeleteBy.bounty_id(?);';

    pool.query(qry, [bountyId], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  createBountyDb,
  getBountyByIdDb,
  deleteBountyByIdDb,
};