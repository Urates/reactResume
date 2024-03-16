import React from "react";
import AccountancyImg from "../assets/s4.png";
import EntrepreneurshipImg from "../assets/s3.png";
import SoftwareDevImg from "../assets/s9.png";
import './Accountancy.css';


const Entrepreneurship = () => {
    
  return (
    <div className="accountancy-container">
         <div className="item1">
            <img src={EntrepreneurshipImg} alt="Entrepreneurship icon"/>
         </div>
         <div className="item2">
            <h2>Entrepreneurship</h2>
            <p id="career-info">In my second year at Walter Sisulu University in 2016 I ventured into entrepreneurship which was already apparent in my talents and skill set. This was powered mainly by the gap I notice in how the current generation is intellectually wired versus how the current education system seeks to connect with the intellectual realm of human beings in schools.</p>

            <p id="career-info">This saw me and my other co-founders registering a company called edgene, in full educated generation. The promise behind the company name is that we can now have an education system that can seamlessly connect human talents to real-life world problems.</p>
         </div>
           
         <div className="item3">
            <a href=""><figure><img src={AccountancyImg} alt="Accountancy icon"/><figcaption><strong>Entrepreneurship</strong></figcaption></figure></a>
         </div>

         <div className="item4">
            <a href=""><figure><img src={SoftwareDevImg} alt="Software Development icon"/><figcaption><strong>Software Development</strong></figcaption></figure></a>
         </div>
    </div>
      
    );
}
 
  export default Entrepreneurship;