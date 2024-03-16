import React from "react";
import AccountancyImg from "../assets/s4.png";
import EntrepreneurshipImg from "../assets/s3.png";
import SoftwareDevImg from "../assets/s9.png";
import './Accountancy.css';


const Accountancy = () => {
    
  return (
    <div className="accountancy-container">
         <div className="item1">
            <img src={AccountancyImg} alt="Accountancy calculator icon"/>
         </div>
         <div className="item2">

            <h2>Accountancy</h2>
            <p id="career-info">At a secondary level of my schooling I was not trained to be specifically in the commerce sector but I eventually ended up in the chartered accountancy stream of studies. This zoomed in many business concepts that would later help me in my entrepreneural journey.</p>

            <p id="career-info">The initial goal was to become a Chartered Accountant at the time but as I grew older in the profession I realised just how much knowledge was idling in my mind waiting for conversion to wisdom. This officially opened up another door to a new career, entrepreneurship.</p>
         </div>
           
         <div className="item3">
            <a href=""><figure><img src={EntrepreneurshipImg} alt="Entrepreneurship icon"/><figcaption><strong>Entrepreneurship</strong></figcaption></figure></a>
         </div>

         <div className="item4">
            <a href=""><figure><img src={SoftwareDevImg} alt="Software Development icon"/><figcaption><strong>Software Development</strong></figcaption></figure></a>
         </div>
    </div>
      
    );
}
 
  export default Accountancy;