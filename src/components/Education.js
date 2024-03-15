import './Education.css';
import React from 'react';
import WSU from '../assets/wsu.jpg';
import Wits from '../assets/wits.jpg';
import Fullstack from '../assets/fullstack.jpg';
import Shortcourses from '../assets/shortcourses.jpg';

function Education() {
  return (
    <div className="education-container">
      <p>Education</p><hr />
      <div className="education-item">
        <img src={WSU} alt='WSU Logo' />
        <h3>Walter Sisulu University</h3>
        <p><b>Bachelor of Commerce in Accounting </b></p>
        <>As soon as I exceptionally completed my matric, I then took a different root from science to accountancy which I did at Walter Sisulu University 'WSU' from 2015. I got to WSU from Ndaliso Senior Secondary School when I got most of the skills in science.</>
      </div>
    </div>
  );
}

export default Education;
