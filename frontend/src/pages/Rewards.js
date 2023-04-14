import UserInfo from '../components/UserInfo';
import Transfer from '../components/Transfer';
import Logout from '../components/Logout';
import './Rewards.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Rewards = ({ userInfo }) => {

  const navigate = useNavigate();
  const [balanceUpdate, setBalanceUpdate] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo]);


  const handleTransfer = (data) => {
    setBalanceUpdate(!balanceUpdate);
  };


  return (
    <div className="rewards-page">
      <div>
        
        <h1>Rewards</h1>
        <Logout/>
      </div>
      <UserInfo userInfo={userInfo} balanceUpdater={balanceUpdate}/>
      <Transfer userInfo={userInfo} onTransfer={handleTransfer}/>
    </div>
  );
};

export default Rewards;
