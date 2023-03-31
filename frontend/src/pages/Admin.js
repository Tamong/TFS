import React, { useState, useEffect } from 'react';

const Admin = ({ userInfo }) => {
  const [balance, setBalance] = useState(null);

  return (
    <div>
      <h1>You are an Admin!</h1>
      <p>Welcome, {userInfo.username}!</p>
    </div>
  );
};

export default Admin;
