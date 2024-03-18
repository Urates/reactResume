import React from "react";
import AccountancyImg from "../assets/s4.png";
import EntrepreneurshipImg from "../assets/s3.png";
import SoftwareDevImg from "../assets/s9.png";
import './Entrepreneurship.css';


const Entrepreneurship = () => {
  return (
    <div className="entrepreneurship-container">
         <ul>
            <img src={SoftwareDevImg} alt="Software development icon"/>
            <ul>
               <li><h2>Entrepreneurship</h2></li>
               <li>
                  <p id="career-info">In my second year at Walter Sisulu University in 2016 I ventured into entrepreneurship which was already apparent in my talents and skill set. This was powered mainly by the gap I notice in how the current generation is intellectually wired versus how the current education system seeks to connect with the intellectual realm of human beings in schools.</p>
               </li>
               <li><p id="career-info">This saw me and my other co-founders registering a company called edgene, in full educated generation. The promise behind the company name is that we can now have an education system that can seamlessly connect human talents to real-life world problems.</p></li>
            </ul>
            <ul>
               <li><h3>Associated Skills</h3></li>
               <ul className="row">
                  <li className="item" id="presentation"><p><b>Presentation</b></p></li>
                  <li className="item" id="patenting"><p><b>Patenting</b></p></li>
                  <li className="item" id="commercialisation"><p><b>Commercialisation</b></p></li>
                  <li className="item" id="project-management"><p><b>Project Management</b></p></li>
                  <li className="item" id="research"><p><b>Research</b></p></li>
               </ul>
            </ul>
         </ul>
      </ div>
      
    );
}
 
  export default Entrepreneurship;