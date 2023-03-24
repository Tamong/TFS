import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


import Home from "./pages/Home";
import Login from "./pages/Login";
import Rewards from "./pages/Rewards";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
