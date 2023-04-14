const rewardDb = require('../db/rewards.db');

const getRewardInfo = async () => {
    try{
        return await rewardDb.getRewardInfoDb();
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    getRewardInfo
}