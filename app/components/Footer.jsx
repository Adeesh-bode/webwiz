import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import {  footerData } from '../data'


const Footer = () => {
  const about = [
    {
      title:"Our Staff",
      link: "#"
    },
    {
      title:"Timeline",
      link: "#"
    },
    {
      title:"Spells",
      link: "#"
    },
    {
      title:"Brand Kit",
      link: "#"
    },
  ]
  console.log("footer");

  return (
    <div className='h-[30vh] w-screen text-center flex justify-between items-center px-6'>
      <div className='flex flex-col gap-3 w-fit'>
        <h2>Need Help?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsum, quasi itaque iure harum iste aspernatur possimus mollitia
        </p>
        <div className='flex gap-3 justify-between items-center'>
          <FaLinkedin />
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
      {
        footerData.map((item)=>{
          <div>
            <h2>{item.title }</h2>
            {
              item.data.map((entity)=>{
                <a href={entity.link}>{entity.title}</a>
              })
            }
          </div>
        })
      }
      
    </div>
  )
}

export default Footer;