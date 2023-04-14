import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Home from "./pages/Home";
import Login from "./pages/Login";
import Rewards from "./pages/Rewards";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";


function App() {
  
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('tfstoken');
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('tfstoken');
        } else {
          setUserInfo(decodedToken.userInfo[0]);
        }
      } catch (err) {
        console.error('Error decoding JWT:', err);
      }

    }

    const initialUserInfo = checkAuth();
    if (initialUserInfo) {
      setUserInfo(initialUserInfo[0]);
    }
  }, []);


  useEffect(() => {
    if (!userInfo) {
      return;
    }
  }, [userInfo]);


  function checkAuth() {
    const token = localStorage.getItem('tfstoken');
    if (!token) {
      return null;
    }
    setUserInfo(jwt_decode(token).userInfo[0]);

    try {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('tfstoken');
        return null;
      }
      return decodedToken.userInfo;
    } catch (err) {
      console.error('Error decoding JWT:', err);
      return null;
    }
  }



  const handleLogin = (token) => {
    setUserInfo(jwt_decode(token).userInfo[0]);
  };

  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home userInfo={userInfo} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/rewards" element={<Rewards userInfo={userInfo} />} />
            <Route path="/admin" element={<Admin userInfo={userInfo}/>} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
