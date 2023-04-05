import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import contract_abi from "../contract/TFSCoin.json";
import { tfs_coin_address } from "../contract/addresses";


const InfuraBalance = ({ walletAddress }) => {
  const [balance, setBalance] = useState(null);
  const provider = new Web3.providers.HttpProvider('https://goerli.infura.io/v3/cfc2b2fdb07d4fb3bc66d23be932ad20');
  const web3 = new Web3(provider);

  useEffect(() => {
    const getBalance = async () => {

      const contract = new web3.eth.Contract(
        contract_abi.abi,
        tfs_coin_address
      );
      const balanceInWei = await web3.eth.getBalance(walletAddress);
      const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
      const balanceInTFS = await contract.methods.balanceOf(walletAddress).call();
      
      setBalance(balanceInTFS);

      console.log(balanceInTFS);

    };

    getBalance();

    // Set up an interval to update the balance every 5 seconds
    const intervalId = setInterval(getBalance, 5000);

    // Remove the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [walletAddress]);

  useEffect(() => {
    // Dispatch a custom event with the balance when it updates
    const balanceEvent = new CustomEvent(walletAddress, { detail: balance});
    window.dispatchEvent(balanceEvent);
  }, [balance, walletAddress]);

  return (
    <div>Loading...</div>
  );
};

export default InfuraBalance;
