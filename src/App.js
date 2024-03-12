import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Background from './components/Background';
import Education from './components/Education';


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
    </div>
  );
}

export default App;
