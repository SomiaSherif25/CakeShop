import React, { Fragment } from 'react'
import Background from './Background'
import Section from './Section'
import Section2 from './Section2'
import Section3 from './Section3'
// import Navbar from '../Nav-component/Navbar'

const Home = () => {
  return (
    <Fragment>
      <Background/>
      {/* <Section/> */}
      <Section2 />
      <Section3/>
    </Fragment>
  )
}

export default Home
