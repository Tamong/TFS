import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logout from '../components/Logout';

const Admin = ({ userInfo, token }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo]);

  return (
    <div>
      <h1>Admin</h1>
      <Logout/>

      {userInfo !== null ? (
        <p>Welcome, {userInfo.username}!</p>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
};

export default Admin;