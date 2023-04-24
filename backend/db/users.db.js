const getUserByIdDb = async (userId) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Employee.SelectBy.ee_ID`(?);";

    pool.query(qry, [userId], (err, result) => {
      if (err) reject(err);
      resolve(result[0][0]);
    });
  });
};

const getUserByUsernameDb = async (username) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Employee.SelectBy.username`(?);";

    pool.query(qry, [username], (err, result) => {
      if (err) reject(err);
      resolve(result[0][0]);
    });
  });
};

const createUserDb = async (username, password, walletAddr, walletPrivate) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Employee.Insert`(?, ?, ?, ?);";

    pool.query(
      qry,
      [username, password, walletAddr, walletPrivate],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};

const checkinUserDb = async (userId) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Check_In.UpdateBy.ee_ID`(?);";

    pool.query(qry, [Number(userId)], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getUserCheckinsDb = async (userId) => {
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Check_In.SelectBy.ee_ID`(?);";

    pool.query(qry, [Number(userId)], (err, result) => {
      if (err) reject(err);
      resolve(result[0]);
    });
  });
};

module.exports = {
  getUserByIdDb,
  getUserByUsernameDb,
  createUserDb,
  getUserCheckinsDb,
  checkinUserDb,
};
