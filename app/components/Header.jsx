'use client'
import React, { useState } from 'react';
import { MdAccountCircle, MdMenu, MdClose } from 'react-icons/md';
import { navlinks } from '../data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='fixed w-screen bg-black/70 z-50'>
      <div className='w-full h-[10vh] flex justify-between items-center px-4 md:px-11'>
        <img src='/logo.svg' alt="GDSC Logo" className='h-full w-8 md:w-20' />

        {/* Toggle Menu Icon */}
        <div className='text-white md:hidden' onClick={(e) => {e.stopPropagation(); setIsMenuOpen(!isMenuOpen)}}>
          {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </div>

        {/* Menu Items for large screens */}
        <div className={`hidden md:flex gap-6 justify-between`}>
          {navlinks.map((item, index) => (
            <a href={item.link} className='text-white text-xl underline-animation' key={index}>
              {item.title}
            </a>
          ))}
        </div>

        {/* Icons for large screens */}
        <div className='hidden md:flex gap-5'>
          <button className='bg-[#E7A4ED] text-[#3B1C63] rounded-md px-3 py-1 text-xl'>
            Login
          </button>
          <MdAccountCircle size={40} color='white' />
        </div>
      </div>

      {/* Menu for Mobile Screens */}
      {isMenuOpen && (
        <div
          className='flex flex-col items-center bg-black/80 py-4 w-full absolute top-[10.5vh] left-0'
        >
          <MdAccountCircle size={40} color='white' className="mb-4" />
          {navlinks.map((item, index) => (
            <a href={item.link} className='text-white text-lg py-2' key={index}>
              {item.title}
            </a>
          ))}
          <button className='bg-[#E7A4ED] text-[#3B1C63] rounded-md px-3 py-1 text-lg mt-4'>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
