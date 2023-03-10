const userDb = require('../db/users.db');

const getUserInfo = async (userId) => {
    try{
        return await userDb.getUserInfoDb(userId);
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    getUserInfo
}