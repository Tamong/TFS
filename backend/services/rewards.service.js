const rewardDb = require('../db/rewards.db');

const getRewardInfo = async (rewardID) => {
    try{
        return await rewardDb.getRewardInfoDb(rewardID);
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    getRewardInfo
}