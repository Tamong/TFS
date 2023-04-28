// Logout.js
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tfstoken");
    navigate("/");
  };

  const handleRewards = () => {
    navigate("/rewards");
  };

  const handleCheckin = () => {
    navigate("/checkin");
  };

  const handleBugBounty = () => {
    navigate("/bugbounty");
  };

  return (
    <div>
      <button className="Logout" onClick={handleLogout}>
        Logout
      </button>
      <button className="Logout" onClick={handleRewards}>
        Rewards App
      </button>
      <button className="Logout" onClick={handleCheckin}>
        Check In App
      </button>

      <button className="Logout" onClick={handleBugBounty}>
        Bug Bounty App
      </button>
    </div>
  );
};

export default Logout;
