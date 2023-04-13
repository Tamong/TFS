import React, { useState, useEffect } from 'react';
import Balance from './Balance';

const Rewards = ({ userInfo }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!userInfo) {
      return;
    }
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

      {userInfo !== null ? (
        <p>Welcome, {userInfo.username}!</p>
      ) : (
        <p>Loading...</p>
      )}
      {userInfo !== null ? (
        <p>Your Wallet Address: {userInfo.wallet_address}</p>
      ) : (
        <p>Loading...</p>
      )}

      {balance !== null ? (
        <p>Your Current Balance: {balance} TFS Coin</p>
      ) : (
        <Balance userInfo={userInfo} />
      )}
    </div>
  );
};

export default Rewards;

