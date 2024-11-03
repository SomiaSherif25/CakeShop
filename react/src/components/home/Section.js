import React, { Fragment } from 'react'
import img1 from '../../images/Inspection.webp'
import img2 from '../../images/Omni-sales-en_eola-5r.webp'
import img3 from '../../images/Payment-en_89nv-j7.webp'
import img4 from '../../images/Ship-EN.webp'

const Section = () => {
  return (
    <Fragment>
      <div className='g-section'>
        <div className='items'>
            <img src={img1} alt=''/>
        </div>
        <div className='items'>
            <img src={img2} alt=''/>
        </div>
        <div className='items'>
         <img src={img3} alt=''/>
        </div>
        <div className='items'>
        <img src={img4} alt=''/>

        </div>
        
      </div>
    </Fragment>
  )
}

export default Section
