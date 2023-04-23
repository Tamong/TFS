const userDb = require('../db/users.db');
const blockchain = require('../contract/blockchain');

const getUserInfoByID = async (userId) => {
    try{
        let userResponse = await userDb.getUserByIdDb(userId);
        if(userResponse.length == 1){
            return userResponse[0];
        }
        return null;
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
        //TODO: Check if user exists
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

const checkinUserByID = async (userId) => {
    try{
        let checkIn = await userDb.checkinUserDb(userId);
        if(checkIn[0][0].message !== "Check-in failed"){
            let user = await getUserInfoByID(userId);
            if(checkIn[0][0].message % 5 == 0){
                await blockchain.awardUser(user.wallet_address, 5, 2);//awardID: 2 = check in five stack

            }
            else {
                await blockchain.awardUser(user.wallet_address, 1, 1); //awardID: 1 = check-in
            }

        }
        if(checkIn[0].length == 1){
            return checkIn[0][0];
        }else{
            return -1;
        }
    }catch(e){
        throw Error(e);
    }
}

const getCheckInsByID = async (userId) => {
    try{
        let checkIns = await userDb.getUserCheckinsDb(userId);
        if(checkIns.length == 1){
            return checkIns[0];
        }else{
            return null;
        }
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    getUserInfoByID,
    getUserInfoByUsername,
    createUser,
    setMaxAllowance,
    checkinUserByID,
    getCheckInsByID
}