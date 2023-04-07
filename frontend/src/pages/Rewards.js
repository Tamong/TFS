import UserInfo from '../components/UserInfo';
import Transfer from '../components/Transfer';
import './Rewards.css';

const Rewards = ({ userInfo }) => {
  
  return (
    <div className="rewards-page">
      <h1>Rewards</h1>
      <UserInfo userInfo={userInfo}/>
      <Transfer userInfo={userInfo}/>
    </div>
  );
};

export default Rewards;
