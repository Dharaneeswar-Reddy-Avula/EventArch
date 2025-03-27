import React from 'react'
import Footer from '../components/Footer'
import About from './About'
import Workshops from '../components/Workshops'
import Events from '../components/Events'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className='bg-[#12122d]'>
      <Navbar/>
      <Workshops/>
      <Events/>
       
        <Footer/>
    </div>
  )
}

export default Home