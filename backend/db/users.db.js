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

module.exports = {
    getUserByIdDb,
    getUserByUsernameDb,
    createUserDb
}


