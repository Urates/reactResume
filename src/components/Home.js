import './Home.css';
import React from 'react';
import HomeImg from '../assets/Home.jpg';

function Home() {
    return (
      <div className="Home-container">
        <img src={HomeImg} alt='Home Image' />
      </div>
    );
  }
  
  export default Home;