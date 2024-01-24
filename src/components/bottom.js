import React from 'react'
import socials from '../assets/socials.svg';

const Bottom = () => {
  return (
    <section className="bg-gray-50 py-[48px]">
      <div className="w-[85%] flex items-center justify-between mx-auto">
        <div>
          <p className="text-gray-500 font-inter text-md font-normal leading-6">
            © 2023 ClearLink. All rights reserved.
          </p>
        </div>

        <img
          src={socials}
          alt="social links"
          className='cursor-pointer'
        />
      </div>
    </section>
  )
}

export default Bottom