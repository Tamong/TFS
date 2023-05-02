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
      <br />
      <h3>Redirect to a different App...</h3>
      <button className="Logout" onClick={handleRewards}>
        Rewards
      </button>
      <button className="Logout" onClick={handleCheckin}>
        Check In
      </button>

      <button className="Logout" onClick={handleBugBounty}>
        Bug Bounty
      </button>
    </div>
  );
};

export default Logout;
