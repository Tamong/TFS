const loginService = require('../services/logins.service');

const postLoginByUserPass = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.sendStatus(400);
    return;
  }

  try {
    let userInfo = await loginService.verifyLogin(username, password);
    if (userInfo && userInfo.token) {
      res.status(200).json(userInfo) && next();
    } 
  } catch (e) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = {
  postLoginByUserPass
};
