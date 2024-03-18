import React from "react";
import AccountancyImg from "../assets/s4.png";
import EntrepreneurshipImg from "../assets/s3.png";
import SoftwareDevImg from "../assets/s9.png";
import './Accountancy.css';


const Accountancy = () => {
  return (
    <div className="accountancy-container">
         <ul>
            <img src={AccountancyImg} alt="Accountancy calculator icon"/>
            <ul>
               <li><h2>Accountancy</h2></li>
               <li>
                  <p id="career-info">At a secondary level of my schooling I was not trained to be specifically in the commerce sector but I eventually ended up in the chartered accountancy stream of studies. This zoomed in many business concepts that would later help me in my entrepreneural journey.</p>
                  <p id="career-info">The initial goal was to become a Chartered Accountant at the time but as I grew older in the profession I realised just how much knowledge was idling in my mind waiting for conversion to wisdom. This officially opened up another door to a new career, entrepreneurship.</p>
               </li>
            </ul>
            <ul>
               <li><h3>Associated Skills</h3></li>
               <ul className="row">
                  <li className="item" id="accounting"><p>Financial Reporting</p></li>
                  <li className="item" id="manacc"><p>Managerial Acc.</p></li>
                  <li className="item" id="auditing"><p>Auditing</p></li>
                  <li className="item" id="taxation"><p>Taxation</p></li>
                  <li className="item" id="finance"><p>Finance</p></li>
               </ul>
            </ul>
         </ul>
      </ div>
      
    );
}
 
  export default Accountancy;