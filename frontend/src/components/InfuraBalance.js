import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const InfuraBalance = ({ walletAddress }) => {
  const [balance, setBalance] = useState(null);
  const provider = new Web3.providers.HttpProvider('https://goerli.infura.io/v3/0e0c445fffd2435687f25fdad41e810d');
  const web3 = new Web3(provider);

  useEffect(() => {
    const getBalance = async () => {
      const balanceInWei = await web3.eth.getBalance(walletAddress);
      const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
      setBalance(balanceInEther);
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
    const balanceEvent = new CustomEvent(walletAddress, { detail: balance });
    window.dispatchEvent(balanceEvent);
  }, [balance, walletAddress]);

  return (
    <div>Loading...</div>
  );
};

export default InfuraBalance;
