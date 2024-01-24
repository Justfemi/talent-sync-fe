import React from 'react'
import Logo from '../assets/logo.svg';
import appstore from '../assets/appstore.svg';
import googleplay from '../assets/googleplay.svg';

const Footer = () => {
  return (
    <section className='w-[90%] mx-auto flex items-start py-[96px] justify-center'>
      <div className="w-[35%] mr-[50px]">
        <div className="flex items-center">
          <img 
            src={Logo}
            alt='click logo'
          />
          <h3 
            className="text-gray-900 font-inter text-2xl font-semibold leading-normal ml-1"
          >ClearLink<span className="text-blue-dark-400">.</span></h3>
        </div>

        <p className="text-gray-600 font-inter text-lg font-normal leading-7 mt-[32px]">
          ClearLink is your gateway to effortless, high-quality video conferencing. 
          Join us in shaping the future of communication!
        </p>
      </div>

      <div className="flex flex-col mr-[120px]">
        <p className="text-gray-600 font-inter text-sm font-normal leading-8">Products</p>
        <a href="/" className='mt-[16px]'>Overview</a>
        <a href="/" className='mt-[16px]'>Features</a>
        <a href="/" className='mt-[16px]'>Solutions</a>
        <a href="/" className='mt-[16px]'>Tutorials</a>
        <a href="/" className='mt-[16px]'>Pricing</a>
      </div>

      <div className="flex flex-col mr-[50px] w-[15%]">
        <p className="text-gray-600 font-inter text-sm font-normal leading-8">Company</p>
        <a href="/" className='mt-[16px]'>About us</a>
        <a href="/" className='mt-[16px]'>Careers</a>
        <a href="/" className='mt-[16px]'>Press</a>
        <a href="/" className='mt-[16px]'>News</a>
        <a href="/" className='mt-[16px]'>Contact</a>
      </div>

      <div className="flex flex-col mr-[50px] w-[15%]">
        <p className="text-gray-600 font-inter text-sm font-normal leading-8">Resources</p>
        <a href="/" className='mt-[16px]'>Blog</a>
        <a href="/" className='mt-[16px]'>Events</a>
        <a href="/" className='mt-[16px]'>Help centre</a>
        <a href="/" className='mt-[16px]'>Tutorials</a>
        <a href="/" className='mt-[16px]'>Support</a>
      </div>

      <div className="flex flex-col mr-[120px]">
        <p className="text-gray-600 font-inter text-sm font-normal leading-8">Legal</p>
        <a href="/" className='mt-[16px]'>Terms</a>
        <a href="/" className='mt-[16px]'>Privacy</a>
        <a href="/" className='mt-[16px]'>Cookies</a>
        <a href="/" className='mt-[16px]'>Licences</a>
        <a href="/" className='mt-[16px]'>Contact</a>
      </div>

      
      <div className="flex flex-col">
        <p className="text-blue-700 font-inter text-sm font-normal leading-8">Get the app</p>
        <img
          src={appstore}
          alt="app store logo"
          className="w-[150px] my-[16px]"
        />
        <img
          src={googleplay}
          alt="google play logo"
          className="w-[150px]"
        />
      </div>
    </section>
  )
}

export default Footer