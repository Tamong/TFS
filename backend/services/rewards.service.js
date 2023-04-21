const rewardDb = require('../db/rewards.db');

const getRewardInfo = async (id) => {
    try{
        return await rewardDb.getRewardInfoDb(id);
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    getRewardInfo
}