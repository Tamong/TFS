const getUserByIdDb = async (userId) => {
    return new Promise((resolve, reject) => {

        const qry = `SELECT * FROM employee WHERE ee_ID = ?;`

        pool.query(qry, [userId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

const getUserByUsernameDb = async (username) => {
    return new Promise((resolve, reject) => {

        const qry = `SELECT * FROM employee WHERE username = ?;`

        pool.query(qry, [username], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

const createUserDb = async (username, password, walletAddr, walletPrivate) => {
    return new Promise((resolve, reject) => {

        const qry = `INSERT INTO employee (username, password, wallet_address, private_key) VALUES (?, ?, ?, ?)`

        pool.query(qry, [username, password, walletAddr, walletPrivate], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

const checkinUserDb = async (userId) => {
    return new Promise((resolve, reject) => {
  
      const qry = 'call tfscoin.`tfscoin.Check_In.UpdateBy.ee_ID`(?);';
  
  
      pool.query(qry, [Number(userId)], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  };
  
  const getUserCheckinsDb = async (userId) => {
    return new Promise((resolve, reject) => {
  
      const qry = 'SELECT checkin_counter FROM tfscoin.employee WHERE ee_ID = ?;';
  
      pool.query(qry, [Number(userId)], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  };

module.exports = {
    getUserByIdDb,
    getUserByUsernameDb,
    createUserDb,
    getUserCheckinsDb,
    checkinUserDb
}


