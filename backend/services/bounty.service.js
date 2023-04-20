const bountyDb = require('../db/bounty.db');

const createBounty = async (ee_ID, title, description) => {
  try {
    const result = await bountyDb.createBountyDb(ee_ID, title, description);
    return result;
  } catch (e) {
    throw Error(e);
  }
};

const getBountyById = async (bountyId) => {
  try {
    const result = await bountyDb.getBountyByIdDb(bountyId);
    //Check if value exists
    if (result[0] && result[0].length > 0) {
      return result[0][0];
    }
    return null;
  } catch (e) {
    throw Error(e);
  }
};

const deleteBountyById = async (bountyId) => {
  try {
    const result = await bountyDb.deleteBountyByIdDb(bountyId);
    return result;
  } catch (e) {
    throw Error(e);
  }
};

module.exports = {
  createBounty,
  getBountyById,
  deleteBountyById,
};
