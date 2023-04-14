const loginDb = require('../db/logins.db');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyLogin = async (username, password) => {
  try {
    const user = await loginDb.getUserLoginDb(username, password);

    if (user[0].username) {
      const payload = {
        userInfo: user,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

      return {
        token,
      };
    } else {
      throw new Error('Authentication failed');
    }
  } catch (e) {
    throw Error(e);
  }
};



module.exports = {
    verifyLogin
}