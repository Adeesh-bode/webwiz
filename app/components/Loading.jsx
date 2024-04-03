import React from 'react';

const loading = () => {
  return (
    <div>
        <video autoPlay loop className="w-full h-screen object-cover">
            <source src={'/loading.mp4'} type="video/mp4" />
        </video>
    </div>
  )
}

export default loading;