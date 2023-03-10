const userService = require('../services/users.service');

const getUserByID = async (req, res, next) => {
    if(!req.params.id) res.sendStatus(400).send() && next();
    try{
        let userInfo = await userService.getUserInfo(req.params.id);
        res.status(200).json(userInfo) && next();
    }catch(e){
        res.sendStatus(500) && next();
    }
}

module.exports = {
    getUserByID
}