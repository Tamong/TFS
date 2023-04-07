const getLoginInfoDb = async (username, password) => {
    console.log("getLogin hit!");
    return new Promise((resolve, reject) => {

        qry = qry = `SELECT * FROM employee WHERE username = '${username}' AND password = '${password}';`


        connection.query(qry, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

module.exports = {
    getLoginInfoDb
}


