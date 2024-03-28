import React from 'react'
import Hero from './Hero';
import Features from './Features';
const Landing = () => {
  console.log("Landing");

  return (
    <div className='w-screen h-[90vh] flex flex-col justify-start items-center gap-5   pt-20'>
        <Hero/>
        <Features/>
    </div>
  )
}

export default Landing;