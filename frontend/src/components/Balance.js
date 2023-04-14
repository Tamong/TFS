import React, { useState, useEffect } from 'react';

const Balance = ({ userInfo, balanceUpdate, setBalanceUpdate }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!userInfo) {
      return;
    }

    const getBalance = async () => {
      const response = await fetch(`http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/balance/user/${userInfo.username}`);
      const data = await response.json();
      setBalance(data);
    };

    getBalance();
  }, [userInfo]);

  useEffect(() => {
    if (balanceUpdate) {
      const getBalance = async () => {
        const response = await fetch(`http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/balance/user/${userInfo.username}`);
        const data = await response.json();
        setBalance(data);
      };

      getBalance();
      setBalanceUpdate(false);
    }
  }, [balanceUpdate, setBalanceUpdate, userInfo]);

  return (
    <p>Your Current Balance: {balance} TFS Coin</p>
  );
};

export default Balance;
