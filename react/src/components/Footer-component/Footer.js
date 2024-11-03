import React, { Fragment } from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <Fragment>
      <div className="foot-container">
        <div>
          <h4>Location</h4>
          <NavLink to={"/login"}>4736 Poe Lane, HOT</NavLink>
          <NavLink to={"/register"}>SPRINGS, Montana-59845</NavLink>
        </div>
        <div>
          <h4>Quick Links</h4>
          <NavLink to={"/about"}>About Us</NavLink>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>UAE, Türkiye, Egypt</p>
          <a href="#c">+971 452 307 13</a>
          <a href="#c">+90 534 683 1310</a>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer
