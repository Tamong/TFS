const bountyDb = require("../db/bounty.db");
const userDb = require("../db/users.db");
const userService = require("./users.service");
const blockchain = require("../contract/blockchain");

const createBounty = async (ee_ID, title, description) => {
  try {
    const result = await bountyDb.createBountyDb(ee_ID, title, description);
    let user = await userDb.getUserByIdDb(ee_ID);
    // BELOW CODE IS USED FOR REWARDING BUG, NOT USED FOR NOW
    //await blockchain.awardUser(user.wallet_address, 1, 0); //awardID: 0 = bug-bounty
    return result;
  } catch (e) {
    throw Error(e);
  }
};

const getBountyById = async (bountyId) => {
  try {
    const result = await bountyDb.getBountyByIdDb(bountyId);
    //Check if value exists
    if (result[0]) {
      return result[0];
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
