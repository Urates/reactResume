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
        <img src={WSU} alt='WSU Logo'/>
      </div>
    );
  }
  
  export default Education;