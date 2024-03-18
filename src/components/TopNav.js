import './TopNav.css';
import React from 'react';
import NavImg from '../assets/pb002.png';
import { useState } from 'react';

function TopNav() {
  const [activeLink, setActiveLink] = useState('');

  useState(() => {
    const handleScroll = () => {
      // Logic to determine which section is currently visible
      // For simplicity, let's assume you have an array of section IDs
      const sections = ['accountancy', 'entrepreneurship', 'software'];
      let activeSection = '';

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top < window.innerHeight/2) {
          activeSection = sectionId;
        }
      });

      // Update the active link based on the active section
      setActiveLink(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <div className="topNav">
       <img src={NavImg} alt='Navigation Image' />
          <span><h1>MR. UVIWE MAKIVA</h1></span>
          <div className='Credentials'>
          <a href="#accountancy" className={activeLink === 'accountancy' ? 'active' : ''}><strong>Accountant</strong></a>
          <a href="#entrepreneurship" className={activeLink === 'entrepreneurship' ? 'active' : ''}><strong>Entrepreneur</strong></a>
          <a href="#software" className={activeLink === 'software' ? 'active' : ''}><strong>Fullstack Software Developer</strong></a>
       </div>
    </div>
  );
}
export default TopNav;
