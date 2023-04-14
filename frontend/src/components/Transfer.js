import React, { useState } from 'react';

const Transfer = ({ onTransfer, userInfo }) => {
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

  function handleSubmit(event) {
        event.preventDefault();

        const data = { username, amount };
        
        setErrorMessage("");
        // http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com
        fetch(`http://localhost:3000/api/transfer/usernames`, {
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
            onTransfer();
            
            if(data.error === "Invalid Username"){
                setErrorMessage("Invalid Username");
            }
            if(data.error === "Insufficient Balance"){
                setErrorMessage("Insufficient Balance");
            }
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
