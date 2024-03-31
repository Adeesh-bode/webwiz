import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import {  footerData } from '../data'


const Footer = () => {
  console.log("footer");
  console.log(footerData);
  return (
    <div id='contact' className='h-fit w-screen text-center flex flex-col md:flex-row justify-between items-start px-20 py-8  mt-[200px] bg-black/15 '>
      <div className='w-80 flex flex-col items-center gap-6 '>
        <h2 className='text-xl'>Need Help?</h2>
        <p className='text-center font-thin'>
          Lorem ipsum dolor sit amet consectetur, ipsum, quasi itaque iure harum iste aspernatur possimus mollitia
        </p>
        <div className='w-2/3 flex  justify-between items-center'>
          <FaLinkedin />
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
      {
        footerData.map((item,index)=>{

          return(

            <div key={index} className='flex flex-col gap-3 '>
            <h1 className='text-xl' >{item.title }</h1>
            {
              item.data.map((entity,index)=>{
                return(
                  <a href={entity.link} key={index} className='font-sans font-extralight'>{entity.title}</a>
                )
              })
            }
          </div>
        )
        })
      }
    </div>
  )
}

export default Footer;