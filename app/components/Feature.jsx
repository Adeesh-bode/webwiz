import React from 'react'
import Image from 'next/image'
import '../globals.css';
const Feature = ({ index, feature }) => {
    // console.log(index, feature); // observe its console happens like server side even if no client server is made @nextjs 
   return (
    <div className={`w-screen h-[100vh] flex justify-between  items-center px-56 ${ index%2!=0 && 'flex-row-reverse' } `}>
        <Image src={feature.path} alt={feature.title} width={275} height={275} />
        <div className='flex flex-col gap-8'>
            <h1  className='text-5xl bg-gradient-to-b from-gray-900 to-white bg-clip-text text-transparent'>{feature.title}</h1>
            <p className='w-[500px] font-sans font-extralight text-xl'>{feature.description}</p>
        </div>
    </div>
  )
}

export default Feature;