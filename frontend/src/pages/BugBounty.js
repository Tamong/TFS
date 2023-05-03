import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import "./Rewards.css";

const Transfer = ({ userInfo, token }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [bountyStatus, setBountyStatus] = useState("");

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  function handleSubmit(event) {
    event.preventDefault();

    setBountyStatus("Sending Bounty...");
    //ec2-3-137-214-39.us-east-2.compute.amazonaws.com
    fetch(
      `http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/bounty/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          ee_ID: userInfo.ee_ID,
          title: title,
          description: description,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setBountyStatus("Bug Bounty Created!");
      })
      .catch((error) => {});
  }

  return (
    <div className="rewards-page earn-items">
      <h1>Bug Bounty</h1>
      <UserInfo userInfo={userInfo} token={token} />

      <h2>Submit a Bug Bounty</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
            />
          </label>
          <br />
          <label>
            Description:
            <div className="amount-input">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
              />
            </div>
          </label>
          <br />
          <input className="submit" type="submit" />
          <div className="txnStatus">
            {bountyStatus && <p>{bountyStatus}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transfer;
