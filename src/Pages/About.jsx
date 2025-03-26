import React from 'react'
import logo from "../assets/logoe.png"
const About = () => {
  return (
    <div className='flex gap-[40px] p-[50px]'>
        <div className=' lg:w-1/2 rounded-lg justify-center items-start'>
      {/* <img src={logo} className='h-[500px] md:w-[500px]'/> */}
        </div>
        <div className='h-[400px] lg:w-1/2 grid grid-cols-1 grid-rows-4 gap-[20px] mt-[30px]'>
             <div className='bg-white/90 backdrop-blur-lg saturate-200 rounded-lg animate-pulse'></div>
             <div className='bg-white/90 backdrop-blur-lg saturate-200 rounded-lg animate-pulse'></div>
             <div className='bg-white/90 backdrop-blur-lg saturate-200 rounded-lg animate-pulse'></div>
             <div className='bg-white/90 backdrop-blur-lg saturate-200 rounded-lg animate-pulse'></div>

        </div>
    </div>
  )
}

export default About