// Logout.js
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tfstoken");
    navigate("/");
  };

  return (
    <div>
      <button className="Logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
