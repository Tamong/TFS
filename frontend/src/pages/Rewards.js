import React, { useState, useEffect } from 'react';
import InfuraBalance from '../components/InfuraBalance';

const Rewards = ({ userInfo }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    // Set the wallet address to get the balance for
    const walletAddress = userInfo.wallet_address;

    // Set up an event listener to update the balance when the component mounts
    const handleBalanceUpdate = (event) => {
      setBalance(event.detail);
    };
    window.addEventListener(walletAddress, handleBalanceUpdate);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener(walletAddress, handleBalanceUpdate);
    };
  }, [userInfo]);

  return (
    <div>
      <h1>Rewards</h1>
      <p>Welcome, {userInfo.username}!</p>
      <p>Your Wallet Address: {userInfo.wallet_address}</p>
      {balance !== null ? (
        <p>Your Current Balance: {balance} TFS Coin</p>
      ) : (
        <InfuraBalance walletAddress={userInfo.wallet_address} />
      )}
    </div>
  );
};

export default Rewards;
