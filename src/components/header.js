import React from 'react'
import Logo from '../assets/logo.svg';
import dropdown from '../assets/dropdown.svg';

const Header = () => {
  return (
    <div 
      className="w-[87%] mx-auto rounded-full border-2 border-gray-300 bg-gray-100 mt-[40px] flex items-center justify-between py-[16px] px-[32px]"
    >
      <div className="flex items-center">
        <img 
          src={Logo}
          alt='click logo'
        />
        <h3 
          className="text-gray-900 font-inter text-2xl font-semibold leading-normal ml-1"
        >ClearLink<span className="text-blue-dark-400">.</span></h3>
      </div>

      <div>
        <ul className="flex items-center">
          <li>
            <a href="/" className="flex items-center mr-4">
              Products
              <img 
                src={dropdown}
                alt="dropdown icon"
              />
            </a>
          </li>

          <li>
            <a href="/" className="flex items-center mr-4">
              Solutions
              <img 
                src={dropdown}
                alt="dropdown icon"
              />
            </a>
          </li>

          <li>
            <a href="/" className="flex items-center mr-4">
              Resources
              <img 
                src={dropdown}
                alt="dropdown icon"
              />
            </a>
          </li>

          <li>
            <a href="/" className="">
              Pricing
            </a>
          </li>
        </ul>
      </div>

      <div className="">
        <button className="text-gray-900 font-inter font-semibold text-md leading-6 rounded-full border border-gray-400 bg-white shadow-xs px-[24px] py-[14px] mr-[10px]">
          Talk to sales
        </button>

        <button className="text-white font-inter font-medium text-md leading-6 rounded-full bg-blue-700 shadow-xs px-[24px] py-[14px]">
          Sign up for free
        </button>
      </div>

    </div>
  )
}

export default Header;