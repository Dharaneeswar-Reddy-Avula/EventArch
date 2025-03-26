import React from 'react'
import WebTeam from '../components/Teamcard'
import Footer from '../components/Footer'
import Events from './Events'
import Workshops from './Workshops'
import About from './About'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className='bg-[#12122d]'>
      <Navbar/>
      <Workshops/>
      <Events/>
        <WebTeam/>
        <Footer/>
    </div>
  )
}

export default Home