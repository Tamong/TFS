import React, { useState, useEffect } from 'react';

const Balance = ({ userInfo, token, balanceUpdate, setBalanceUpdate }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!userInfo || !token) {
      return;
    }
    const getBalance = async () => {
      fetch(`http://localhost:3000/api/balance/user/${userInfo.username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json())
        .then(data => {
          setBalance(data);
            
        })
        .catch(error => {
        
        });
      
    };

    getBalance();
  }, [userInfo, token]);

  useEffect(() => {
    if (balanceUpdate) {
      const getBalance = async () => {
        fetch(`http://localhost:3000/api/balance/user/${userInfo.username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json())
        .then(data => {
          setBalance(data);
        })
        .catch(error => {        
        });
      };

      getBalance();
      setBalanceUpdate(false);
    }
  }, [balanceUpdate, setBalanceUpdate, userInfo, token]);

  return (
    <p>Your Current Balance: {balance} TFS Coin</p>
  );
};

export default Balance;
