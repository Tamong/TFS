const checkinDB = async (ee_ID) => {
  return new Promise((resolve, reject) => {

    const qry = 'call tfscoin.`tfscoin.Check_In.UpdateBy.ee_ID`(?);';


    pool.query(qry, Number(ee_ID), (err, result) => {
      if (err) reject(err);
      resolve(result[0][0]);
    });
  });
};

const getCountDB = async (ee_ID) => {
  return new Promise((resolve, reject) => {

    const qry = 'SELECT checkin_counter FROM tfscoin.employee WHERE ee_ID = ?;';

    pool.query(qry, [Number(ee_ID)], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  checkinDB,
  getCountDB
};