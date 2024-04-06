import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { footerData } from '../data';

import { motion } from 'framer-motion';
const Footer = () => {
  console.log("footer");
  // console.log(footerData);
  return (
    <motion.div id='contact' 
     className='footer h-fit w-full text-center flex flex-col md:flex-row justify-between items-center md:items-start  px-4 md:px-20 py-8 md:py-11  md:mt-[80px] space-y-6 md:space-y-0'
     initial={{opacity:0, y: 10 }}
     animate={{opacity:1 , y:0, transition: { duration: 3} }}
    >
      <div className='w-full md:w-80 flex flex-col items-center gap-6'>
        <h2 className='text-xl text-center'>Need Help?</h2>
        <p className=' font-sans font-extralight text-lg text-center'>
        Welcome to Web-Wiz 2.0, the best place to learn and share your knowledge about web development.
        </p>
        {/* Consider uncommenting and adjusting the social media icons section for better alignment and responsiveness */}
        {/* <div className='flex justify-center md:justify-start w-full gap-4'>
          <FaLinkedin size={24} />
          <FaFacebook size={24} />
          <FaGithub size={24} />
          <FaInstagram size={24} />
          <FaTwitter size={24} />
        </div> */}
      </div>
      {footerData.map((item, index) => (
        <div key={index} className='flex flex-col items-center  gap-3'>
          <h1 className='text-xl'>{item.title}</h1>
          {item.data.map((entity, index) => (
            <a href={entity.link} key={index} className='font-sans font-extralight'>{entity.title}</a>
          ))}
        </div>
      ))}
    </motion.div>
  );
}

export default Footer;
