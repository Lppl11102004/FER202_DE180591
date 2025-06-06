import React from 'react';
import logo from '../images/Logo_FPT_Education.png';

function Header() {
  return (
    <div style={{ backgroundColor: '#f28c28', padding: '30px 0', textAlign: 'center' }}>
      <div style={{ backgroundColor: 'white', display: 'inline-block', padding: '10px 20px', borderRadius: '8px' }}>
        <img src={logo} alt="FPT University" style={{ maxWidth: '400px' }} />
        
      </div>
      <div style={{ marginTop: '20px' }}>
        <a href="#home" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#about" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>About</a>
        <a href="#contact" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Contact</a>
      </div>
    </div>
  );
}

export default Header;
