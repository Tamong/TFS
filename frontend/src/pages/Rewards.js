import UserInfo from "../components/UserInfo";
import Transfer from "../components/Transfer";
import RewardsList from "../components/RewardsList";
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
      <h1>Rewards</h1>
      <UserInfo
        userInfo={userInfo}
        token={token}
        balanceUpdate={balanceUpdate}
        setBalanceUpdate={setBalanceUpdate}
      />

      <Transfer userInfo={userInfo} token={token} onTransfer={handleTransfer} />
      <RewardsList userInfo={userInfo} token={token} />
      <div className="Filler" />
    </div>
  );
};

export default Rewards;
