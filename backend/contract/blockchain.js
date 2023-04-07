const Web3 = require("web3");
const contract_abi = require("../contract/TFSCoin.json");

const provider = new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/cfc2b2fdb07d4fb3bc66d23be932ad20");
const web3 = new Web3(provider);

const gas = 60000;

const getWalletBalance = async (walletAddress) => {
  const tfs_coin_address = "0x134db1aB1969cA5C8416cB16D44400e4e836a5D9";
  const contract = new web3.eth.Contract(contract_abi.abi, tfs_coin_address);
  const balanceInTFS = await contract.methods.balanceOf(walletAddress).call();
  return Number(balanceInTFS);
};

const transferTokens = async (fromAddr, fromPrivate, toAddr, amount) => {
  const tfs_coin_address = "0x134db1aB1969cA5C8416cB16D44400e4e836a5D9";
  const contract = new web3.eth.Contract(contract_abi.abi, tfs_coin_address);
  let data = contract.methods.transfer(toAddr, amount).encodeABI();
  let txObj = {
    gas: gas,
    to: tfs_coin_address,
    value: "0x00",
    data: data
  };

  /*web3.eth.estimateGas({
    from: fromAddr,
    data: data,
    to: tfs_coin_address
  },  function(err, estimatedGas) {
    if (err) console.log(err);
    console.log(estimatedGas);
  })*/

  web3.eth.accounts.signTransaction(txObj, fromPrivate, (err, signedTx) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(signedTx);
      return web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log(res);
          }
        }
      );
    }
  });
};

const setAllowance = async (baseAddr, basePrivate, allowedAddr) => {
  const tfs_coin_address = "0x134db1aB1969cA5C8416cB16D44400e4e836a5D9";
  const contract = new web3.eth.Contract(contract_abi.abi, tfs_coin_address);
  const balanceInTFS = await contract.methods.balanceOf(walletAddress).call();
  return balanceInTFS;
};

const createAccount = async () => {
  let account = web3.eth.accounts.create();
  console.log(account);
  return account;
};

module.exports = {
  getWalletBalance,
  createAccount,
  transferTokens
};
