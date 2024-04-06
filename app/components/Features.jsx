import React from 'react'
import features from '../data';
import Feature from './Feature'; 
// import { AnimatePresence, motion } from 'framer-motion'

// import { container , item } from '../utils/animations'

const Features = () => {
  console.log("Features");

  return (
    // <AnimatePresence>

    <div className='flex flex-col w-full gap-14 mt-[100px]'>
        {
            features.map((feature, index) => ( 
            <div 
             className='w-full'
            //  variants={container}
            //  initial='hidden'
            //  animate='animate'           
            >
              <Feature  key={index} feature={ feature} index={index} 
                // variants={item}
                // initial='hidden'
                // animate='animate'           
              />
            </div>)
            )
        }
    </div>
    // </AnimatePresence>
  )
}

export default Features