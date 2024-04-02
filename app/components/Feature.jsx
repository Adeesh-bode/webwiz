import React from 'react'
import '../globals.css';

const Feature = ({ index, feature }) => {
    return (
        <div className={`min-h-screen flex flex-col md:flex-row ${index % 2 !== 0 && 'md:flex-row-reverse'} justify-between items-center px-4 md:px-56 w-full`}>
            <img src={feature.path} alt={feature.title} className="w-40 md:w-64 h-auto max-w-xs mx-auto my-4 md:my-0" />
            <div className='flex flex-col gap-8 items-center md:items-start text-center md:text-left'>
                <h1 className='text-3xl md:text-5xl bg-gradient-to-b from-gray-900 to-white bg-clip-text text-transparent'>{feature.title}</h1>
                <p className='w-full md:w-[500px] font-sans font-extralight text-sm md:text-xl'>{feature.description}</p>
            </div>
        </div>
    )
}

export default Feature;
