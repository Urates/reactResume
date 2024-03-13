import './Background.css';
import React from 'react';
import HomeImg from '../assets/Home.jpg';

function Background() {
    return (
      <div className="Background-container">
        <div className='Background-content'>
          <p>Background Information</p>
            <div className='nav'>
                <a href=''>Efficient</a>
                <a href=''>Professional</a>
                <a href=''>Tech-enabled</a>
                <a href=''>Selfless</a>
                <a href=''>Self-sufficient</a>
            </div>
            <div className='content-body'>
                <p>Random text random text</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Background;