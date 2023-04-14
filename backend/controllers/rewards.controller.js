const rewardService = require('../services/rewards.service');

const getRewardByID = async (req, res, next) => {
    if(!req) res.sendStatus(400).send() && next();
    try{
        let rewardInfo = await rewardService.getRewardInfo(req);
        res.status(200).json(rewardInfo) && next();
    }catch(e){
        res.sendStatus(500) && next();
    }
}

module.exports = {
    getRewardByID
}