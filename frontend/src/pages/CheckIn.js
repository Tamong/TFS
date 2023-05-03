import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import "./Rewards.css";

const CheckIn = ({ userInfo, token }) => {
  const navigate = useNavigate();
  const [checkinCounter, setCheckinCounter] = useState(0);
  const [checkinStatus, setCheckinStatus] = useState("");

  useEffect(() => {
    if (!userInfo || !token) {
      navigate("/login");
      return;
    }
    fetch(
      `http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/user/${userInfo.ee_ID}/checkin`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCheckinCounter(data.checkin_counter);
      })
      .catch((error) => {});
  }, [userInfo, token, navigate]);

  function handleCheckIn(event) {
    event.preventDefault();

    setCheckinStatus("Checking In...");

    //ec2-3-137-214-39.us-east-2.compute.amazonaws.com
    fetch(
      `http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/user/${userInfo.ee_ID}/checkin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("CheckIn response:", data);
        if (data.message === "Check-in failed") {
          setCheckinStatus("Already Checked In!");
        }
        // if data.message is a number
        if (data.message > 0) {
          setCheckinStatus("Check In Successful!");
          setCheckinCounter(data.message);
        }
      })
      .catch((error) => {
        //console.error('Transfer error:', error);
        // handle login error
      });
  }

  return (
    <div className="rewards-page earn-items">
      <h1>Check In</h1>
      <UserInfo userInfo={userInfo} token={token} />

      <h2>Daily Check-In</h2>
      <p>Check-ins: {checkinCounter}</p>
      <button className="submit" onClick={handleCheckIn}>
        Check In
      </button>
      <br />
      <div className="txnStatus">{checkinStatus && <p>{checkinStatus}</p>}</div>
    </div>
  );
};

export default CheckIn;
