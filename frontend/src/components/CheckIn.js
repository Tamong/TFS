import { useState, useEffect } from 'react';

const CheckIn = ({ userInfo, token }) => {
  const [checkinCounter, setCheckinCounter] = useState(0);
  const [checkinStatus, setCheckinStatus] = useState('');


  useEffect(() => {
    if (!userInfo || !token) {
      return;
    }
    fetch(`http://localhost:3000/api/checkin/${userInfo.ee_ID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => response.json())
    .then(data => {
        setCheckinCounter(data.checkin_counter);
    })
    .catch(error => {
    
    });
      

  }, [userInfo, token]);




  function handleCheckIn(event) {
        event.preventDefault();
        
        //ec2-3-137-214-39.us-east-2.compute.amazonaws.com
        fetch(`http://localhost:3000/api/user/${userInfo.ee_ID}/checkin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('CheckIn response:', data);
            if(data.message === "Check-in failed"){
                setCheckinStatus("Already Checked In!");
            }
            // if data.message is a number
            if(data.message > 0)
            {
                setCheckinStatus("Check In Successful!");
                setCheckinCounter(data.message);
            }
        })
        .catch(error => {
            //console.error('Transfer error:', error);
            // handle login error 
        
        });
        
    }

  return (
    <div className="earn-items" >
      <h3>Daily Check-In</h3>
      <p>Check-ins: {checkinCounter}</p>
      <button className="submit" onClick={handleCheckIn}>
        Check In
      </button>
      <br/>
        <div className="txnStatus">                                
            {checkinStatus && <p>{checkinStatus}</p>}
        </div>
    </div>
  );
};

export default CheckIn;
