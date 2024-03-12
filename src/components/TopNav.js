import './TopNav.css';
import React from 'react';
import NavImg from '../assets/pb002.png';

function TopNav() {
  return (
    <div className="topNav">
       <img src={NavImg} alt='Navigation Image' />
          <span><h1>MR. UVIWE MAKIVA</h1></span>
          <div className='Credentials'>
          <a href=''>Accountant</a>
          <a href=''>Entrepreneur</a>
          <a href=''>Junior Software Developer</a>
       </div>
    </div>
  );
}

export default TopNav;