const getTransfer = async (from, to, amount) => {
  console.log("getTransfer hit!");
  return new Promise((resolve, reject) => {
    qry = `SELECT * FROM employee WHERE username = '${from}' OR username = '${to}';`;

    connection.query(qry, async (err, result) => {
      if (err) reject(err);

      // check if result contains both 'from' and 'to' users
      if (result.length != 2) {
        resolve([{ error: "Invalid Username" }]);
        return;
      }

      const fromUser = result.find((user) => user.username === from);
      const toUser = result.find((user) => user.username === to);

      // Fetch the balance of the fromUser from the API
      const balanceUrl = `http://localhost:3000/api/balance/${fromUser.username}`;
      const balanceResponse = await fetch(balanceUrl);
      const balanceData = await balanceResponse.json();

      if (balanceData[0].balance < Number(amount)) {
        console.log("Insufficient Balance")
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
