const getUserLoginDb = async (username, password) => {
    return new Promise((resolve, reject) => {

        const qry = `SELECT * FROM employee WHERE username = ? AND password = ?;`


        pool.query(qry, [username, password], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

module.exports = {
    getUserLoginDb
}


