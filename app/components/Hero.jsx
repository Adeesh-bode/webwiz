import React from 'react'

const Hero = () => {
  console.log("Hero");
  return (
    <div className='hero w-screen h-[90vh] flex flex-col justify-start items-center gap-5  mt-28'>
        <h1 className='text-[90px] bg-gradient-to-b from-white to-[#F9FB6B] bg-clip-text text-transparent'>Web-Wiz 2.0</h1>
        <p className='text-white w-1/3  text-center'>
          Welcome to Web-Wiz 2.0, the best place to learn and share your knowledge about web development.
        </p>
        <button className='bg-[#E7A4ED] text-[#3B1C63] text-2xl  px-4 py-2  rounded-md'>Join Us Now</button>
    </div>
  )
}

export default Hero