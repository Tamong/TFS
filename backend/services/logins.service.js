const loginDb = require('../db/logins.db');

const getUserInfo = async (username, password) => {
    try{
        return await loginDb.getLoginInfoDb(username, password);
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    getUserInfo
}