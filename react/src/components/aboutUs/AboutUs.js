import React, { Fragment } from "react";
import "./about.css";
import img from '../../images/team1.jpg'
const AboutUs = () => {
  return (
    <Fragment>
      <div className="about-container">
        <h1>Our Team</h1>
        <div className="main-card">
        <div className="card">
          <img src={img} alt="" />
          <h2>Somia Sherif</h2>
          <h6>CEO & Founder</h6>
          <p>
            Some text that describes me lorem ipsum ipsum lorem.
            jane@example.com
          </p>
          <button>Contact</button>
        </div>
        <div className="card">
          <img src={img}  alt="" />
          <h2>Radwa Okaliy</h2>
          <h6>CEO & Founder</h6>
          <p>
            Some text that describes me lorem ipsum ipsum lorem.
            jane@example.com
          </p>
          <button>Contact</button>
        </div>
        <div className="card">
          <img src={img}  alt="" />
          <h2>Mostafa Wahbaa</h2>
          <h6>CEO & Founder</h6>
          <p>
            Some text that describes me lorem ipsum ipsum lorem.
            jane@example.com
          </p>
          <button>Contact</button>
        </div>
</div>
        
      </div>
    </Fragment>
  );
};

export default AboutUs;
