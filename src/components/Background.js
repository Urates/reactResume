import './Background.css';
import React from 'react';
import HomeImg from '../assets/Home.jpg';
import { useState } from 'react';

function Background(){
  const [selectedLink, setSelectedLink] = useState('efficient');

  const handleLinkClick = (linkId) => {
    setSelectedLink(linkId);
  };
    return (
      <div className="Background-container">
        <div className='Background-content'>
          <p>Background Information</p>
            <div className='nav'>
                <a href='#' id='efficient' onClick={() => handleLinkClick('efficient')}>Efficient</a>
                <a href='#' id='professional' onClick={() => handleLinkClick('professional')}>Professional</a>
                <a href='#' id='tech-enabled' onClick={() => handleLinkClick('tech-enabled')}>Tech-enabled</a>
                <a href='#' id='selfless' onClick={() => handleLinkClick('selfless')}>Selfless</a>
                <a href='#' id='self-sufficient' onClick={() => handleLinkClick('self-sufficient')}>Self-sufficient</a>
            </div>
            <div className='content-body'>
              {selectedLink === 'efficient' && <p>I am always drawn to the idea of finishing much with less effort. Every skill I acquire is stamped efficiency in it; if I cannot do it efficiently, I simply do not know it.</p>}
              {selectedLink === 'professional' && <p>Professional content here...</p>}
              {selectedLink === 'tech-enabled' && <p>Tech-enabled content here...</p>}
              {selectedLink === 'selfless' && <p>Selfless content here...</p>}
              {selectedLink === 'self-sufficient' && <p>Self-sufficient content here...</p>}
            </div>
        </div>
      </div>
    );
  }
  
  export default Background;