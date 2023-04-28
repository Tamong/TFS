const bountyService = require("../services/bounty.service");

const createBounty = async (req, res, next) => {
  const { ee_ID, title, description } = req.body;

  if (!ee_ID || !title || !description) {
    res.sendStatus(400);
    return;
  }

  try {
    const result = await bountyService.createBounty(ee_ID, title, description);
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
      res.status(404).json({ message: "Bounty not found" });
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

const getAllBounty = async (req, res, next) => {
  try {
    const result = await bountyService.getAllBounty();
    res.status(200).json(result) && next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

const processBounty = async (req, res, next) => {
  const { report_id, ee_ID, processor_ee_ID, reward_amount, notes } = req.body;
  if(req.user.userInfo.is_admin == 0){
    res.sendStatus(401);
    return;
  }
  if (
    report_id === NaN ||
    ee_ID === NaN ||
    processor_ee_ID === NaN ||
    reward_amount === NaN ||
    !notes
  ) {
    res.sendStatus(400);
    return;
  }

  try {
    const result = await bountyService.processBounty(
      report_id,
      ee_ID,
      processor_ee_ID,
      reward_amount,
      notes
    );
    res.status(201).json(result) && next();
  } catch (e) {
    console.log(e);
    res.sendStatus(500) && next();
  }
};

module.exports = {
  createBounty,
  getBountyById,
  deleteBountyById,
  getAllBounty,
  processBounty,
};
