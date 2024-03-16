import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Background from './components/Background';
import Education from './components/Education';
import SoftwareDev from './components/SoftwareDev';
import Accountacy from './components/Accountancy';
import Entrepreneurship from './components/Entrepreneurship';

function App() {
  return (
    <div>
        <div className='Nav'>
           <TopNav />
        </div>
        <div className='Body'>
          <Home />
        </div>
        <div className='Background'>
          <Background />
        </div>
        <div className='Education'>
          <Education />
        </div>
        <div className='Accountancy'>
          <Accountacy />
        </div>
        <div className='Entrepreneurship'>
          <Entrepreneurship />
        </div>
        <div className='SoftwareDev'>
          <SoftwareDev />
        </div>
    </div>
  );
}

export default App;
