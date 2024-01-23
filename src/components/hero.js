import React from 'react';
import Header from './header';
import herobg from '../assets/bg-pattern.png';
import Herobody from './herobody';

const Hero = () => {
  return (
    <div className="relative h-[750px]">
      <img 
        src={herobg}
        alt='hero-bg'
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0">
        <Header />
        <Herobody />
      </div>
    </div>
  )
}

export default Hero

// border border-solid border-red-500