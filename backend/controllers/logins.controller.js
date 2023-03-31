const loginService = require('../services/logins.service');

const getLoginByUserPass = async (req, res, next) => {
  const { username, password } = req.query;

  if (!username || !password) {
    res.sendStatus(400);
    return;
  }

  try {
    let userInfo = await loginService.getUserInfo(username, password);
    res.status(200).json(userInfo);
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = {
  getLoginByUserPass
};
