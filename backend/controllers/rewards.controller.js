const rewardService = require('../services/rewards.service');

const getRewardByID = async (req, res, next) => {
    const {id} = req.params.id;
    if(!id) res.sendStatus(400).send() && next();
    try{
        let rewardInfo = await rewardService.getRewardInfo(id);
        res.status(200).json(rewardInfo) && next();
    }catch(e){
        res.sendStatus(500) && next();
    }
}

module.exports = {
    getRewardByID
}