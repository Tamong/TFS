const loginDb = require('../db/logins.db');

const verifyLogin = async (username, password) => {
    try{
        return await loginDb.getUserLoginDb(username, password);
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    verifyLogin
}