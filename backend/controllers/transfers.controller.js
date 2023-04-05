const transferService = require('../services/transfers.service');

const getTransfer = async (req, res, next) => {
  const { from, to, amount } = req.body;

  if (!from || !to || !amount) {
    res.sendStatus(400);
    return;
  }

  try {
    let transferInfo = await transferService.getTransferInfo(from, to, amount);
    res.status(200).json(transferInfo);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = {
  getTransfer
};
