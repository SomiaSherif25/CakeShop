import React, { Fragment } from 'react'
import './section.css'
import img1 from '../../images/items1.jpg.webp'
import img2 from '../../images/items2.jpg.webp'
import img3 from '../../images/items3.jpg.webp'

const Section3 = () => {
  return (
      <Fragment>
          <div className='big-container'>
      <div className="pp-container">
        <div className="pproduct">
          <img alt="" src={img1} />
          <h4>Cashmere Tank</h4>
          <p>$98.00</p>
          <button>Read More</button>
        </div>
      </div>
      <div className="pp-container">
        <div className="pproduct">
          <img alt="" src={img2} />
          <h4>Cashmere Tank</h4>
          <p>$98.00</p>
          <button>Read More</button>
        </div>
      </div>
      <div className="pp-container">
        <div className="pproduct">
          <img alt="" src={img3} />
          <h4>Cashmere Tank</h4>
          <p>$98.00</p>
          <button>Read More</button>
        </div>
              </div>
          </div>
    </Fragment>
  );
}

export default Section3