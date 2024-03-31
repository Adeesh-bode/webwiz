import React from 'react';
import Image from 'next/image';
const Background = () => {
  return (
    <div className='h-100% flex flex-col justify-between items-center'>
        <Image src={'/bgtop'} layout='fill' objectFit='cover' />
        <Image src={'/bgbottom'} layout='fill' objectFit='cover' />
    </div>
  )
}

export default Background