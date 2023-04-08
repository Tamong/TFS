const userDb = require('../db/users.db');
const blockchain = require('../contract/blockchain');

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

const createUser = async (username, password) => {
    try{
        //generate private key and wallet address
        let bcAcc = await blockchain.createAccount();
        await blockchain.fundUserForApprove(bcAcc.address);
        await blockchain.setMaxAllowance(bcAcc.address, bcAcc.privateKey);
        let user = await userDb.createUserDb(username, password, bcAcc.address, bcAcc.privateKey);
        return user;
    }catch(e){
        throw Error(e);
    }
}

//temporary function for existing users
const setMaxAllowance = async (username) => {
    try{
        //generate private key and wallet address
        let user = await userDb.getUserByUsernameDb(username);
        await blockchain.fundUserForApprove(user[0].wallet_address);
        let transaction = await blockchain.setMaxAllowance(user[0].wallet_address, user[0].private_key);
        return transaction;
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    getUserInfoByID,
    getUserInfoByUsername,
    createUser,
    setMaxAllowance
}