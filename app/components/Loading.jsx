import React from 'react';

const loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-white'>
        <img src={'/wand.gif'} alt='interactive loading wand' className='w-28' />
    </div>
  )
}

export default loading;