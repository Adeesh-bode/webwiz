import React from 'react'
import Image from 'next/image'
const Feature = ({ index, feature }) => {
  
    // console.log(index, feature); // observe its console happens like server side even if no client server is made @nextjs 
   return (
    <div className={`w-screen h-[90vh] flex justify-between  items-center px-64 ${ index%2!=0 && 'flex-row-reverse' } `}>
        <Image src={feature.path} alt={feature.title} width={250} height={250} />
        <div className='flex flex-col gap-6'>
            <h1  className='text-4xl'>{feature.title}</h1>
            <p className='w-[500px]'>{feature.description}</p>
        </div>
    </div>
  )
}

export default Feature;