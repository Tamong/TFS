const getUserLoginDb = async (username, password) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Employee.SelectBy.userpass`(?, ?);";

    pool.query(qry, [username, password], (err, result) => {
      if (err) reject(err);
      resolve(result[0]);
    });
  });
};

module.exports = {
  getUserLoginDb,
};
