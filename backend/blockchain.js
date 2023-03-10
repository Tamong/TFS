require('dotenv').config();

const Web3 = require('web3');
const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);


web3.eth.getBlockNumber().then((blockNumber) => {
  console.log(`Latest block number is ${blockNumber}`);
}).catch((error) => {
  console.error(error);
});