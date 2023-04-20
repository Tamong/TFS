const checkinService = require('../services/checkin.service');

const checkIn = async (req, res, next) => {
  const ee_ID = req.params.id;

  if (ee_ID === undefined) {
    res.sendStatus(400);
    return;
  }

  try {
    const result = await checkinService.checkinByID(ee_ID);
    res.status(201).json(result) && next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

const getCountByID = async (req, res, next) => {
  const ee_ID = req.params.id;
  if (ee_ID === undefined) {
    res.sendStatus(400);
    return;
  }

  try {
    const checkinCount = await checkinService.getCountById(ee_ID);
    if (checkinCount) {
      res.status(200).json(checkinCount) && next();
    } else {
      res.status(404).json({ message: 'Checkin not found' });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};


module.exports = {
  checkIn,
  getCountByID
};