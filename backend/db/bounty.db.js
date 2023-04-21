const createBountyDb = async (ee_ID, title, description) => {
  return new Promise((resolve, reject) => {

    const qry = 'INSERT INTO bug_report (ee_ID, title, bug_description) VALUES (?, ?, ?);';
    //const qry = 'CALL tfscoin.Bug_bounty.Insert(?, ?, ?);';

    pool.query(qry, [ee_ID, title, description], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getBountyByIdDb = async (bountyId) => {
  return new Promise((resolve, reject) => {
    const qry = 'SELECT * FROM bug_bounty WHERE bounty_id = ?;';

    pool.query(qry, [Number(bountyId)], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const deleteBountyByIdDb = async (bountyId) => {
  return new Promise((resolve, reject) => {
    const qry = 'DELETE FROM bug_bounty WHERE bounty_id = ?';

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