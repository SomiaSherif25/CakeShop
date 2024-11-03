import React, { Fragment } from 'react'
import img from '../../images/about1.jpg.webp'
import './home.css'

const Section2 = () => {
  return (
    <Fragment>
        <div className='parent'>
        
              <div className="child">
           
          <h2>
        This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit
            in voluptate velit esse cillum.
          </p>
                  </div>
              <div className="child">
          <img src={img} alt="" />
        </div>
              </div>
    </Fragment>
  );
}

export default Section2