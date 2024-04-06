'use client'
import React from 'react'
import { motion } from 'framer-motion';
const Hero = () => {
  console.log("Hero");
  return (
    <motion.div
      // initial={{ opacity:  1 , x: -100}}
      // animate={{ opacity: 1 ,x:0 }}
      // transition={{ duration: 1 }}
      className=' hero w-screen h-screen flex flex-col justify-center items-center gap-5  md:py-28'
    >
        <div className='text-[40px] md:text-[90px] bg-gradient-to-b from-white to-[#F9FB6B] bg-clip-text text-transparent'>Web-Wiz 2.0</div>
        <div className='text-white w-2/3 md:w-1/3  text-center'>
          Welcome to Web-Wiz 2.0, the best place to learn and share your knowledge about web development.
        </div>
        <button className='bg-[#E7A4ED] text-[#3B1C63] text-2xl  px-4 py-2  rounded-md'>Join Us Now</button>
    </motion.div>
  )
}

export default Hero;