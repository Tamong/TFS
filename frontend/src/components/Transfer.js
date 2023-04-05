import React, { useState, useEffect } from 'react';
import InfuraBalance from './Balance';

const Transfer = ({ userInfo }) => {
  const [balance, setBalance] = useState(null);
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


    const handleAmountChange = (event) => {
        if (isNaN(event.target.value)) {
            setErrorMessage("Please enter a valid number");
        } else {
            setAmount(event.target.value);
            setErrorMessage("");
        }
    };


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


  function handleSubmit(event) {
        event.preventDefault();

        const data = { username, amount };
        
        setErrorMessage("");
        fetch(`http://localhost:4000/api/transfer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: userInfo.username,
                to: data.username,
                amount: data.amount
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Transfer response:', data);
            if(data[0].error === "Invalid Username"){
                setErrorMessage("Invalid Username");
            }
            if(data[0].error === "Insufficient Balance"){
                setErrorMessage("Insufficient Balance");
            }

            if(!data[0]) {
                //setErrorMessage("Error! Try again in a few minutes...");
            } 
            // handle successful login
        })
        .catch(error => {
            //console.error('Transfer error:', error);
            // handle login error 
        
        });
        
    }



  return (
    <div>
      <h2>Transfer Balance</h2>
      <div>
        <form onSubmit={handleSubmit}>
            <label>
                Send to: 
                <input value={username} onChange={e => setUsername(e.target.value) } placeholder="Enter Username"/>
            </label>
            <br />
            <label>
                Amount:
                <div className="amount-input">
                    <input value={amount} onChange={handleAmountChange} placeholder="Enter Amount" />
                    <span>TFS</span>
                </div>
            </label>
            <br />

            <br />
            
            <input  className="submit" type="submit" />
            <div className="error">                                
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </form>
      </div> 
    </div>
  );
};

export default Transfer;
