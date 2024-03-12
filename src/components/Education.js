import './Education.css';
import React from 'react';
import WSU from '../assets/wsu.jpg';
import Wits from '../assets/wits.jpg';
import Fullstack from '../assets/fullstack.jpg';
import Shortcourses from '../assets/shortcourses.jpg';

function Education() {
    return (
      <div className="Education-container">
        <p>Education</p>
          <ul>
            <li><img src={WSU} alt='Walter Sisulu University logo'/></li>
            <li><img src={Wits} alt='Wits logo'/></li>
            <li><img src={Fullstack} alt='Full Stack software Dev icon'/></li>
            <li><img src={Shortcourses} alt='Shortcourses Icon'/></li>
          </ul>
      </div>
    );
  }
  
  export default Education;