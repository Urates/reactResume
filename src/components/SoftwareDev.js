import React from "react";
import AccountancyImg from "../assets/s4.png";
import EntrepreneurshipImg from "../assets/s3.png";
import SoftwareDevImg from "../assets/s9.png";
import './Accountancy.css';


const SoftwareDev = () => {
    
  return (
    <div className="accountancy-container">
         <div className="item1">
            <img src={SoftwareDevImg} alt="Software Development icon"/>
         </div>
         <div className="item2">

            <h2>Software Development</h2>
            <p id="career-info">As soon as I left Mthatha, where I was doing my training in an accounting firm to polish my accounting, taxation, and finance skills, I came to Cape Town with the hopes of getting a job with my experience in accounting.</p> 
            
            <p id="career-info">At this point, I was already busy planning to develop an application or at least a prototype to my application. I had no programming experience at the time but I was hoping to leverage the app development personnel with my business friends who have programming background. Cape Town welcomed me with a course in Full Stack Software Development, a program funded by ABSA and implemented via UVU Africa, CapaCiti, Younglings. </p>

         </div>
           
         <div className="item3">
            <a href=""><figure><img src={AccountancyImg} alt="Accountancy icon"/><figcaption><strong>Entrepreneurship</strong></figcaption></figure></a>
         </div>

         <div className="item4">
            <a href=""><figure><img src={EntrepreneurshipImg} alt="Entrepreneurship icon"/><figcaption><strong>Software Development</strong></figcaption></figure></a>
         </div>
    </div>
      
    );
}
 
  export default SoftwareDev;