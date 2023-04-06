const userService = require('../services/users.service');
const blockchain = require('../contract/blockchain');

const getUserByID = async (req, res, next) => {
    if(!req.params.id) res.sendStatus(400) && next();
    try{
        let userInfo = await userService.getUserInfo(req.params.id);
        res.status(200).json(userInfo) && next();
    }catch(e){
        res.sendStatus(500) && next();
    }
}

const testWalletCreation = async(req, res, next)=> {
    try{
        let account = await blockchain.createAccount();
        res.status(200).json(account) && next();
    }catch(e){
        console.log(e);
        res.sendStatus(500) && next();
    }
}

module.exports = {
    getUserByID,
    testWalletCreation
}