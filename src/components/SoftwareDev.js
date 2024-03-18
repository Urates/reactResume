import React from "react";
import AccountancyImg from "../assets/s4.png";
import EntrepreneurshipImg from "../assets/s3.png";
import SoftwareDevImg from "../assets/s9.png";
import './SoftwareDev.css';


const SoftwareDev = () => {
  return (
    <div className="software-container">
         <ul>
            <img src={SoftwareDevImg} alt="Software development icon"/>
            <ul>
               <li><h2>Software Development</h2></li>
               <li>
                  <p id="career-info">As soon as I left Mthatha, where I was doing my training in an accounting firm to polish my accounting, taxation, and finance skills, I came to Cape Town with the hopes of getting a job with my experience in accounting.</p>
                  <p id="career-info">At this point, I was already busy planning to develop an application or at least a prototype to my application. I had no programming experience at the time but I was hoping to leverage the app development personnel with my business friends who have programming background. Cape Town welcomed me with a course in Full Stack Software Development, a program funded by ABSA and implemented via UVU Africa, CapaCiti, Younglings.</p>
               </li>
            </ul>
            <ul>
               <li><h3>Associated Skills</h3></li>
               <ul className="row">
                  <li className="item" id="javascript"><p>JavaScript</p></li>
                  <li className="item" id="python"><p>Python</p></li>
                  <li className="item" id="java"><p>Java</p></li>
                  <li className="item" id="html"><p>HTML & CSS</p></li>
                  <li className="item" id="git"><p>Git Version Control</p></li>
               </ul>
            </ul>
         </ul>
      </ div>
      
    );
}
 
  export default SoftwareDev;