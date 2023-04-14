const Web3 = require("web3");
const contract_abi = require("../contract/TFSCoin.json");
const { tfs_coin_address } = require("./addresses");

const provider = new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/cfc2b2fdb07d4fb3bc66d23be932ad20");
const web3 = new Web3(provider);

const getWalletBalance = async (walletAddress) => {
  try{
  const contract = new web3.eth.Contract(contract_abi.abi, tfs_coin_address);
  const balanceInTFS = await contract.methods.balanceOf(walletAddress).call();
  const decimals = await contract.methods.decimals().call();
  const actlAmt = web3.utils.toBN(balanceInTFS).div(web3.utils.toBN(10).pow(web3.utils.toBN(decimals)));
  return Number(actlAmt);
  }catch(e){
    console.log(e);
  }
};

  //Call on initial setup to allow main address to transfer tokens
  const setMaxAllowance = async (ownerAddr, ownerPrivate) => {
    console.log(ownerAddr, ownerPrivate);
    const spenderAddr = process.env.MAIN_WALLET_ADDRESS;
    const contract = new web3.eth.Contract(contract_abi.abi, tfs_coin_address);
  
    const maxAllowance = '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
    const data = contract.methods.approve(spenderAddr, maxAllowance).encodeABI();
  
    const txObj = {
      from: ownerAddr,
      to: tokenAddress,
      data: data
    };
  
    try {
      const gasPrice = await web3.eth.getGasPrice();
      const gasLimit = await contract.methods.approve(spenderAddr, maxAllowance).estimateGas({ from: ownerAddr });
      const transactionCount = await web3.eth.getTransactionCount(ownerAddr);
  
      const signedTx = await web3.eth.accounts.signTransaction(
        { ...txObj, gasPrice, gas: gasLimit, nonce: transactionCount },
        ownerPrivate,
      );
  
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      return receipt;
    } catch (error) {
      console.error('Error setting max allowance:', error);
    }
  };

  //This utilizes the allowance from before, so the main wallet can transfer funds on behalf of the users
  const transferTokensFromUser = async (fromAddr, toAddr, amount) => {
    const mainWalletAddr = process.env.MAIN_WALLET_ADDRESS;
    const mainWalletPrivate = process.env.MAIN_WALLET_PRIVATE;
    const contract = new web3.eth.Contract(contract_abi.abi, tfs_coin_address);
    const decimals = await contract.methods.decimals().call();
    const actlAmt = web3.utils.toBN(amount).mul(web3.utils.toBN(10).pow(web3.utils.toBN(decimals)));
  
    const data = contract.methods.transferFrom(fromAddr, toAddr, actlAmt).encodeABI();
    const txObj = {
      from: mainWalletAddr,
      to: tokenAddress,
      data: data
    };
  
    try {
      const gasPrice = await web3.eth.getGasPrice();
      const gasLimit = await contract.methods.transferFrom(fromAddr, toAddr, actlAmt).estimateGas({ from: mainWalletAddr });
      const transactionCount = await web3.eth.getTransactionCount(mainWalletAddr);
  
      const signedTx = await web3.eth.accounts.signTransaction(
        { ...txObj, gasPrice, gas: gasLimit, nonce: transactionCount },
        mainWalletPrivate,
      );
  
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      return receipt;
    } catch (error) {
      console.error('Error during token transfer:', error);
    }
  };

  const fundUserForApprove = async (userAddr) => {
    const mainWalletAddr = process.env.MAIN_WALLET_ADDRESS;
    const mainWalletPrivate = process.env.MAIN_WALLET_PRIVATE;
    const contract = new web3.eth.Contract(contract_abi.abi, tfs_coin_address);
  
    const maxAllowance = '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
    const gasPrice = await web3.eth.getGasPrice();
  
    try {
      const gasLimit = await contract.methods.approve(mainWalletAddr, maxAllowance).estimateGas({ from: mainWalletAddr });
      const etherNeeded = web3.utils.toBN(gasLimit).mul(web3.utils.toBN(gasPrice));
  
      const txObj = {
        from: mainWalletAddr,
        to: userAddr,
        value: etherNeeded,
      };
  
      const transactionCount = await web3.eth.getTransactionCount(mainWalletAddr);
      const signedTx = await web3.eth.accounts.signTransaction(
        { ...txObj, gasPrice, gas: web3.utils.toHex(gasLimit * 2), nonce: transactionCount },
        mainWalletPrivate,
      );
  
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      return receipt;
    } catch (error) {
      console.error('Error funding user for approve:', error);
    }
  };

const createAccount = async () => {
  let account = web3.eth.accounts.create();
  return account;
};

module.exports = {
  getWalletBalance,
  createAccount,
  transferTokensFromUser,
  setMaxAllowance,
  fundUserForApprove
};
