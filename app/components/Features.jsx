import React from 'react'
import features from '../features';
import Feature from './Feature'; 
const Features = () => {
  console.log("Features");

  return (
    <div className='flex flex-col gap-10 '>
        {
            features.map((feature, index) => ( <Feature  key={index} feature={ feature} index={index} />))
        }
    </div>
  )
}

export default Features