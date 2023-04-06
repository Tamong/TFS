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

module.exports = {
    getUserByIdDb,
    getUserByUsernameDb
}


