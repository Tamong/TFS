import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Home from "./pages/Home";
import Login from "./pages/Login";
import Rewards from "./pages/Rewards";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";

function App() {


  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = (data) => {
    setUserInfo(data[0]);
  };

  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
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
