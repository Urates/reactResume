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
            <div className='content-body' >
              {selectedLink === 'efficient' && <p>I am always drawn to the idea of achieving <b>much</b> with <b>less</b> effort. Every skill I acquire is stamped efficiency in it; if I cannot do it efficiently, I simply do not know it. In a world that has become so dependent on time it becomes extremely important to ensure that everything you do you mark TIME as the highest ghost worthy of all human respect.</p>}
              {selectedLink === 'professional' && <p>We coexist in this world; so much that the existence of the other needs to be structured so that it peacefully synchronises with the whole human system. This calls for the development of a standard to in the cohabitate the world and that standard is none other than professionalism which encourages respect for everyone.</p>}
              {selectedLink === 'tech-enabled' && <p>Tech is mostly, if not entirely, about efficiency and effectiveness. The initial goal of tech is to provide alternative and easier ways to lead our lives on this land. Most of my life is lead by technological operations in one way or another.</p>}
              {selectedLink === 'selfless' && <p>As we navigate our way in this life it becomes complicated to choose with certainty the right way of living. For example, most people believe that you need to be self-centered to survive well in this world, I just chose being selfless and I am still happy with my life at least at a moral level.</p>}
              {selectedLink === 'self-sufficient' && <p>Self-sufficiency in this context is used to mean that I generally do not require anyone behind me monitoring my learning because I have made learning as part of my daily meal. I no longer push myself to learn, I am actually trying to reduce the intensity of over-reading to save some time for a variety of other healthy habits.</p>}
            </div>
        </div>
      </div>
    );
  }
  
  export default Background;