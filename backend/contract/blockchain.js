const Web3 = require("web3");
const contract_abi = require("../contract/TFSCoin.json");

const provider = new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/cfc2b2fdb07d4fb3bc66d23be932ad20");
const web3 = new Web3(provider);

const gas = 60000;

const getWalletBalance = async (walletAddress) => {
  try{
    const tfs_coin_address = "0x134db1aB1969cA5C8416cB16D44400e4e836a5D9";
  const contract = new web3.eth.Contract(contract_abi.abi, tfs_coin_address);
  const balanceInTFS = await contract.methods.balanceOf(walletAddress).call();
  const decimals = await contract.methods.decimals().call();
  console.log(decimals);
  const actlAmt = Number(balanceInTFS) / (10 ** decimals);
  return actlAmt;
  }catch(e){
    console.log(e);
  }
};

const transferTokens = async (fromAddr, fromPrivate, toAddr, amount) => {
  const tfs_coin_address = "0x134db1aB1969cA5C8416cB16D44400e4e836a5D9";
  const contract = new web3.eth.Contract(contract_abi.abi, tfs_coin_address);
  const decimals = await contract.methods.decimals().call();
  const actlAmt = web3.utils.toBN(amount).mul(web3.utils.toBN(10).pow(web3.utils.toBN(decimals)));
  
  let data = contract.methods.transfer(toAddr, actlAmt).encodeABI();
  let txObj = {
    from: fromAddr,
    gas: web3.utils.toHex(100000),
    to: tfs_coin_address,
    data: data
  };

  try {
    const gasPrice = await web3.eth.getGasPrice();
    const transactionCount = await web3.eth.getTransactionCount(fromAddr);

    const signedTx = await web3.eth.accounts.signTransaction(
      { ...txObj, gasPrice, nonce: transactionCount },
      fromPrivate,
    );

    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction receipt:', receipt);
    return receipt;
  } catch (error) {
    console.error('Error during token transfer:', error);
  }
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
