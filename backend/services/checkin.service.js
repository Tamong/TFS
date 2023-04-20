const checkinDb = require('../db/checkin.db');

const checkinByID = async (ee_ID) => {
  try {
    const result = await checkinDb.checkinDB(ee_ID);
    
    return result;
  } catch (e) {
    throw Error(e);
  }
};

const getCountById = async (ee_ID) => {
  try {
    const result = await checkinDb.getCountDB(ee_ID);
    return result[0];
  } catch (e) {
    throw Error(e);
  }
};

module.exports = {
  checkinByID,
  getCountById
};
