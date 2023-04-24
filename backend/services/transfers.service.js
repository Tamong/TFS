const userDb = require("../db/users.db");
const blockchain = require("../contract/blockchain");

const transferTokensUsernames = async (fromUsername, toUsername, amount) => {
  try {
    const from = await userDb.getUserByUsernameDb(fromUsername);
    if (from) {
      const to = await userDb.getUserByUsernameDb(toUsername);
      if (to) {
        //From exists, to exists. Get wallet addresses
        const fromAddr = from.wallet_address;
        const toAddr = to.wallet_address;

        //Get balances
        const fromBal = await blockchain.getWalletBalance(fromAddr);
        const toBal = await blockchain.getWalletBalance(toAddr);

        //NOTE: Amount may return additional trailing 0's
        if (amount <= fromBal) {
          //Transfer tokens
          //const remaining = blockchain.transferTokens(toAddr, fromAddr, amount)
          await blockchain.transferTokensFromUser(fromAddr, toAddr, amount);
          //Return updated balances for to and from
          return {
            toBal: Number(toBal) + Number(amount),
            fromBal: Number(fromBal) - Number(amount),
          };
        } else {
          return { error: "Insufficient Balance" };
        }
      } else {
        return { error: "Invalid Username" };
      }
    }
    return { toBal: -1, fromBal: -1 };
  } catch (e) {
    throw Error(e);
  }
};

module.exports = {
  transferTokensUsernames,
};
