import React from 'react'
import Image from 'next/image';
import Logo  from "../../public/logo.svg";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  console.log("header");

  return (
    <div className='w-full bg-black/70 py-2'>
        <div className='w-full h-[10vh] flex justify-between items-center px-11'>
            <Image src={Logo} alt="GDSC Logo" className='w-15 h-15'/>
            <ul className='flex gap-6 justify-between '>
                <li className='text-white'>Home</li>
                <li className='text-white'>About</li>
                <li className='text-white'>Events</li>
                <li className='text-white'>Contact</li>
            </ul>
            <div className='flex gap-5'>
                <button className='bg-teal-500 rounded-md  px-3 py-1 '>Sign Up</button>
                <MdAccountCircle size={40} color='white'/>
            </div>
        </div> 
    </div>
  )
}

export default Header;