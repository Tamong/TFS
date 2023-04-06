const userDb = require('../db/users.db');
const blockchain = require('../contract/blockchain');

const getBalanceByUsername = async (username) => {
    try{
        const userInfo = await userDb.getUserByUsernameDb(username);
        if(userInfo.length == 1){
            //User exists
            const walletAddr = userInfo[0].wallet_address;
            const bal = await blockchain.getWalletBalance(walletAddr);
            return bal;
        }
        return -1;
    }catch(e){
        throw Error(e);
    }
}

const getBalanceById = async (eeID) => {
    try{
        const userInfo = await userDb.getUserByIdDb(eeID);
        if(userInfo.length == 1){
            //User exists
            const walletAddr = userInfo[0].wallet_address;
            const bal = await blockchain.getWalletBalance(walletAddr);
            return bal;
        }
        return -1;
    }catch(e){
        throw Error(e);
    }
}

const getBalanceByWallet = async (walletAddr) => {
    try{
        const bal = await blockchain.getWalletBalance(walletAddr);
        return bal;
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    getBalanceByUsername,
    getBalanceByWallet,
    getBalanceById
}