import React from 'react'
import features from '../data';
import Feature from './Feature'; 
const Features = () => {
  console.log("Features");

  return (
    <div className='flex flex-col  mt-[100px]'>
        {
            features.map((feature, index) => ( <Feature  key={index} feature={ feature} index={index} />))
        }
    </div>
  )
}

export default Features