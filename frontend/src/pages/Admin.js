import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logout from "../components/Logout";
import AdminBugBounty from "../components/AdminBugBounty";
import AdminModifyRewards from "../components/AdminModifyRewards";

import "./Admin.css";

const Admin = ({ userInfo, token }) => {
  const navigate = useNavigate();

  const [page, setPage] = useState("");

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const handleButtonClick = (bountyType) => {
    if (bountyType === "Bug Bounty") {
      setPage("Bug Bounty");
    } else if (bountyType === "Modify Rewards") {
      setPage("Modify Rewards");
    } else if (bountyType === "Claimed Rewards") {
      setPage("Claimed Rewards");
    }
  };

  return (
    <div className="admin-page">
      <div>
        <h1>Admin</h1>

        <Logout />

        {userInfo !== null ? (
          <p>Welcome, {userInfo.username}!</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        <h2>Navigate</h2>
        <button onClick={() => handleButtonClick("Bug Bounty")}>
          Bug Bounty
        </button>
        <button onClick={() => handleButtonClick("Modify Rewards")}>
          Modify Rewards
        </button>
        <button onClick={() => handleButtonClick("Claimed Rewards")}>
          Claimed Rewards
        </button>
      </div>

      <div>
        {page === "Bug Bounty" && (
          <AdminBugBounty userInfo={userInfo} token={token} />
        )}
        {page === "Modify Rewards" && (
          <AdminModifyRewards userInfo={userInfo} token={token} />
        )}
        {page === "Claimed Rewards" && (
          <AdminBugBounty userInfo={userInfo} token={token} />
        )}
      </div>

      <div className="Filler" />
    </div>
  );
};

export default Admin;
