import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };


  return (
    <nav className="navbar">
        <div className="logo">TFSCoin</div>
        <div className="menu-icon" onClick={handleClick}>
            <i className={`fas ${active ? 'fa-times' : 'fa-bars'}`}></i>
        </div>

        <ul className={active ? 'nav-links active' : 'nav-links'}>
            <li><a href="#home" onClick={handleClick}>Home</a></li>
            <li><a href="#rewards" onClick={handleClick}>Rewards</a></li>
            <li><a href="#faq" onClick={handleClick}>FAQ</a></li>
            <li><a href="/login" onClick={handleClick}>Login</a></li>
        </ul>
    </nav>
  );
}

export default Header;

