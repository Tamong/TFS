import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Rewards from "./pages/Rewards";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";


function App() {
  
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('tfstoken');
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('tfstoken');
        } else {
          setUserInfo(decodedToken.userInfo);
          setToken(token);
          
        }
      } catch (err) {
        console.error('Error decoding JWT:', err);
      }

    }

    const initialUserInfo = checkAuth();
    if (initialUserInfo) {
      setUserInfo(initialUserInfo);
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
    setUserInfo(jwt_decode(token).userInfo);
    setToken(token);

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



  const handleLogin = (token, decodedData) => {
    setUserInfo(decodedData);
    setToken(token);
  };

  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home userInfo={userInfo} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/rewards" element={<Rewards userInfo={userInfo} token={token} />} />
            <Route path="/admin" element={<Admin userInfo={userInfo} token={token} />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
