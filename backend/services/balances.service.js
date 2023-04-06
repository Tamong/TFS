const balanceDb = require('../db/balances.db');

const getBalanceInfo = async (username) => {
    try{
        return await balanceDb.getBalanceInfoDb(username);
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    getBalanceInfo
}