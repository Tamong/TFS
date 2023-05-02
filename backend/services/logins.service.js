const loginDb = require('../db/logins.db');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyLogin = async (username, password) => {
  try {
    const user = await loginDb.getUserLoginDb(username, password);
    if (user.length == 1) {
      const payload = {
        userInfo: user[0],
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

      return {
        token,
      };
    } else {
      return null;
    }
  } catch (e) {
    throw Error(e);
  }
};



module.exports = {
    verifyLogin
}