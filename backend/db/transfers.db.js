const balanceService = require("../services/balance.service");

const getTransfer = async (from, to, amount) => {
  console.log("getTransfer hit!");
  return new Promise((resolve, reject) => {
    const qry = "call tfscoin.`tfscoin.Employee.SelectBy.userpass`(?, ?);";

    pool.query(qry, [from, to], async (err, result) => {
      if (err) reject(err);

      // check if result contains both 'from' and 'to' users
      if (result.length != 2) {
        resolve([{ error: "Invalid Username" }]);
        return;
      }

      const fromUser = result.find((user) => user.username === from);
      const toUser = result.find((user) => user.username === to);

      const balance = await balanceService.getBalanceByUsername(
        fromUser.username
      );
      if (balance < Number(amount)) {
        console.log("Insufficient Balance");
        resolve([{ error: "Insufficient Balance" }]);
        return;
      }

      const response = {
        from: fromUser,
        to: toUser,
      };
      resolve(response);
    });
  });
};

module.exports = {
  getTransfer,
};
