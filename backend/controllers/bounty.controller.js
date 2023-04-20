const bountyService = require('../services/bounty.service');

const createBounty = async (req, res, next) => {
  const { title, description, coinReward, isActive } = req.body;

  if (!title || !description || !coinReward || isActive === undefined) {
    res.sendStatus(400);
    return;
  }

  try {
    const result = await bountyService.createBounty(title, description, coinReward, isActive);
    res.status(201).json(result) && next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

const getBountyById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const bounty = await bountyService.getBountyById(id);
    if (bounty) {
      res.status(200).json(bounty) && next();
    } else {
      res.status(404).json({ message: 'Bounty not found' });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

const deleteBountyById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await bountyService.deleteBountyById(id);
    res.status(200).json(result) && next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

module.exports = {
  createBounty,
  getBountyById,
  deleteBountyById,
};