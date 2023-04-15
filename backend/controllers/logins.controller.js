const loginService = require('../services/logins.service');

const postLoginByUserPass = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.sendStatus(400);
    return;
  }

  try {
    let userInfo = await loginService.verifyLogin(username, password);
    if (userInfo) {
      res.status(200).json(userInfo) && next();
    } else{
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

module.exports = {
  postLoginByUserPass
};
