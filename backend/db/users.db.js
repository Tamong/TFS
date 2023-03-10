const getUserInfoDb = async (userId) => {
    console.log("getUserInfoDb hit!");
    return new Promise((resolve, reject) => {

        qry = `SELECT * FROM employee WHERE ee_ID = ${userId};`

        connection.query(qry, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

module.exports = {
    getUserInfoDb
}


