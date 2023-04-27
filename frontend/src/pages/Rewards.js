import UserInfo from "../components/UserInfo";
import Transfer from "../components/Transfer";
import Logout from "../components/Logout";
import RewardsList from "../components/RewardsList";
import BugBounty from "../components/BugBounty";
import CheckIn from "../components/CheckIn";
import "./Rewards.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Rewards = ({ userInfo, token }) => {
  const navigate = useNavigate();
  const [balanceUpdate, setBalanceUpdate] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const handleTransfer = () => {
    setBalanceUpdate(true);
  };

  return (
    <div className="rewards-page">
      <div>
        <h1>Rewards</h1>
        <Logout />
      </div>
      <UserInfo
        userInfo={userInfo}
        token={token}
        balanceUpdate={balanceUpdate}
        setBalanceUpdate={setBalanceUpdate}
      />
      <Transfer userInfo={userInfo} token={token} onTransfer={handleTransfer} />
      <RewardsList userInfo={userInfo} token={token} />
      <h2>Earn Coins</h2>
      <div className="earn-item">
        <BugBounty userInfo={userInfo} token={token} />
        <CheckIn userInfo={userInfo} token={token} />
      </div>
      <div className="Filler" />
    </div>
  );
};

export default Rewards;
