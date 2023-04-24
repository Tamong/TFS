import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logout from "../components/Logout";

import "./Admin.css";

const Admin = ({ userInfo, token }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

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
        <h2>Modify Rewards</h2>
      </div>

      <div className="Filler" />
    </div>
  );
};

export default Admin;
