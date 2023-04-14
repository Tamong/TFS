const balanceService = require('../services/balances.service');

const getBalanceByUsername = async (req, res, next) => {
  const { username } = req.params;

  if (!username) {
    res.sendStatus(400) && next();
    return;
  }

  try {
    let balanceInfo = await balanceService.getBalanceByUsername(username);
    res.status(200).json(balanceInfo);
  } catch (e) {
    res.sendStatus(500);
  }
};

const getBalanceById = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400) && next();
    return;
  }

  try {
    let balanceInfo = await balanceService.getBalanceById(id);
    res.status(200).json(balanceInfo);
  } catch (e) {
    res.sendStatus(500);
  }
};

const getBalanceByAddr = async (req, res, next) => {
  const { addr } = req.params;

  if (!addr) {
    res.sendStatus(400) && next();
    return;
  }

  try {
    let balanceInfo = await balanceService.getBalanceByAddr(addr);
    res.status(200).json(balanceInfo);
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = {
  getBalanceByUsername,
  getBalanceById,
  getBalanceByAddr
};
