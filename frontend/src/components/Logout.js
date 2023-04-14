// Logout.js
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('tfstoken');
    navigate('/');
  };

  return (
    <button className="Logout" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
