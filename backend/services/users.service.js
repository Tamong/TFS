const userDb = require('../db/users.db');

const getUserInfoByID = async (userId) => {
    try{
        return await userDb.getUserByIdDb(userId);
    }catch(e){
        throw Error(e);
    }
}

const getUserInfoByUsername = async (username) => {
    try{
        return await userDb.getUserByUsernameDb(username);
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    getUserInfoByID,
    getUserInfoByUsername
}