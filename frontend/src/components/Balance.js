import React, { useState, useEffect } from 'react';

const Balance = ({ userInfo }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      const response = await fetch(`http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/balance/${userInfo.username}`);
      const data = await response.json();
      setBalance(data[0].balance);
    };

    getBalance();

    // Set up an interval to update the balance every 5 seconds
    const intervalId = setInterval(getBalance, 5000);

    // Remove the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [userInfo.username]);

  useEffect(() => {
    // Dispatch a custom event with the balance when it updates
    const balanceEvent = new CustomEvent(userInfo.wallet_address, { detail: balance });
    window.dispatchEvent(balanceEvent);
  }, [balance, userInfo.wallet_address]);

  return (
    <div>Loading...</div>
  );
};

export default Balance;
