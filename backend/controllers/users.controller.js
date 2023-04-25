const userService = require("../services/users.service");
const blockchain = require("../contract/blockchain");

const getUserByID = async (req, res, next) => {
  let { id } = req.params;
  if (!id) res.sendStatus(400);
  try {
    let userInfo = await userService.getUserInfoByID(req.params.id);
    if (userInfo) {
      res.status(200).json(userInfo);
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    res.sendStatus(500) && next();
  }
};

const testWalletCreation = async (req, res, next) => {
  try {
    let account = await blockchain.createAccount();
    res.status(200).json(account) && next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

const postCreateUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) res.sendStatus(400) && next();
  try {
    let user = await userService.createUser(username, password);
    res.status(200).json(user) && next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

const postApproveUser = async (req, res, next) => {
  const { username } = req.body;
  if (!username) res.sendStatus(400) && next();
  try {
    let user = await userService.setMaxAllowance(username);
    res.status(200).json(user) && next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

const postUserCheckIn = async (req, res, next) => {
  const { id } = req.params;
  if (!id) res.sendStatus(400) && next();
  try {
    let checkedInUser = await userService.checkinUserByID(id);
    //check if user exists, or if checkin was successful
    res.status(200).json(checkedInUser) && next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

const getUserCheckInCount = async (req, res, next) => {
  const { id } = req.params;
  if (!id) res.sendStatus(400) && next();

  try {
    let checkinCount = await userService.getCheckInsByID(id);
    if (checkinCount) {
      res.status(200).json(checkinCount) && next();
    } else {
      res.status(404).json({ message: "Checkin not found" });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

module.exports = {
  getUserByID,
  testWalletCreation,
  postCreateUser,
  postApproveUser,
  postUserCheckIn,
  getUserCheckInCount,
};
