import './Education.css';
import React from 'react';
import WSU from '../assets/wsu.jpg';
import Wits from '../assets/wits.jpg';
import Fullstack from '../assets/fullstack.jpg';
import Shortcourses from '../assets/shortcourses.jpg';

function Education() {
    return (
      <div className="Education-container">
        <p className='p'>Education</p>
          <div className='education-items'>
            <img src={WSU} alt='Walter Sisulu University logo'/><p>Walter Sisulu University</p>
            <img src={Wits} alt='Wits logo'/><p>Wits University</p>
            <img src={Fullstack} alt='Full Stack software Dev icon'/><p>Software Development</p>
            <img src={Shortcourses} alt='Shortcourses Icon'/><p>Shortcourses</p>
          </div>
      </div>
    );
  }
  
  export default Education;