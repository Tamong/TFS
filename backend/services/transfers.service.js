const transferDb = require('../db/transfers.db');

const getTransferInfo = async (from, to, amount) => {
    try{
        return await transferDb.getTransfer(from, to, amount);
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    getTransferInfo
}