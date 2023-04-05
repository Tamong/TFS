const balanceService = require('../services/balances.service');

const getBalanceByUser = async (req, res, next) => {
  const { username } = req.params;

  if (!username) {
    res.sendStatus(400);
    return;
  }

  try {
    let balanceInfo = await balanceService.getBalanceInfo(username);
    res.status(200).json(balanceInfo);
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = {
  getBalanceByUser
};
