const loginService = require('../services/logins.service');

const postLoginByUserPass = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.sendStatus(400);
    return;
  }

  try {
    let userInfo = await loginService.verifyLogin(username, password);
    if(userInfo.length == 1){
      res.status(200).json(userInfo[0]) && next();
    }else{
      res.sendStatus(401) && next();
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = {
  postLoginByUserPass
};
