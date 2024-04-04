import React from 'react'
import Hero from './Hero';
import Features from './Features';
const Landing = () => {
  console.log("Landing");
  return (
    <div className='w-full justify-start items-center gap-5 pt-15'>
        <Hero/>
        <Features/>
    </div>
  )
}

export default Landing;