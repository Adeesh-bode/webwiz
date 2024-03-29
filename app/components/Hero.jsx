import React from 'react'

const Hero = () => {
  console.log("Hero");
  return (
    <div className='w-screen h-[90vh] flex flex-col justify-start items-center gap-5  mt-36'>
        <h1 className='text-[110px] '>Lorem Ipsum</h1>
        <p className='text-black w-1/3  text-center'>
            Lorem ipsum dolor ad. Sequi consectetur laboriosam magni quod et desad. Sequi consectetur  erunt eos accusamus Sequi tenetur.
        </p>
        <button className='bg-teal-400 px-4 py-2  rounded-md'>Join Us</button>
    </div>
  )
}

export default Hero