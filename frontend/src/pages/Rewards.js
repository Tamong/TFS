import UserInfo from '../components/UserInfo';
import Transfer from '../components/Transfer';
import Logout from '../components/Logout';
import './Rewards.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Rewards = ({ userInfo }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo]);

  return (
    <div className="rewards-page">
      <h1>Rewards</h1>
      <Logout/>
      <UserInfo userInfo={userInfo}/>
      <Transfer userInfo={userInfo}/>
    </div>
  );
};

export default Rewards;
