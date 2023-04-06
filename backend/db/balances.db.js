const Web3 = require('web3');
const contract_abi = require("../contract/TFSCoin.json");

const provider = new Web3.providers.HttpProvider('https://goerli.infura.io/v3/cfc2b2fdb07d4fb3bc66d23be932ad20');
const web3 = new Web3(provider);

const getBalance = async (walletAddress) => {
  const tfs_coin_address = "0x134db1aB1969cA5C8416cB16D44400e4e836a5D9";
  const contract = new web3.eth.Contract(contract_abi.abi, tfs_coin_address);
  const balanceInTFS = await contract.methods.balanceOf(walletAddress).call();
  return balanceInTFS;
};

const getBalanceInfoDb = async (username) => {
    console.log("getBalance hit!");
    return new Promise((resolve, reject) => {

        const qry = `SELECT wallet_address FROM employee WHERE username = '${username}';`

        connection.query(qry, async (err, result) => {
            if (err) reject(err);

            const walletAddress = result[0].wallet_address;

            // get balance
            const balanceInTFS = await getBalance(walletAddress);

            // add balance property to result object
            result[0].balance = balanceInTFS;

            resolve(result);
        });
    });
};

module.exports = {
    getBalanceInfoDb
};


