const createBountyDb = async (ee_ID, title, description) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Bug_Report.Insert`(?, ?, ?);";
    //const qry = 'CALL tfscoin.Bug_bounty.Insert(?, ?, ?);';

    pool.query(qry, [ee_ID, title, description], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getBountyByIdDb = async (bountyId) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Bug_Report.SelectBy.bounty_id`(?);";

    pool.query(qry, [Number(bountyId)], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const deleteBountyByIdDb = async (bountyId) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Bug_Report.DeleteBy.report_id`(?);";

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
