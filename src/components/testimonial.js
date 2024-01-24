import React from 'react';
import shopify from '../assets/shopify.svg';
import stars from '../assets/stars.svg';
import profile from '../assets/profilepic.png';
import leftarrow from '../assets/left-arrow.svg';
import rightarrow from '../assets/right-arrow.svg';
import testimonailimg from '../assets/testimonialgroup.png'

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-[96px]">
      <div className="w-[80%] mx-auto flex items-center px-[32px] justify-between">
        <div className="w-[45%]">
          <img
            src={shopify}
            alt="shopify logo"
            className="w-[110px]"
          />

          <img
            src={stars}
            alt="rating"
            className="my-[48px]"
          />

          <h3 className="text-gray-900 font-inter text-2xl font-medium tracking-tight mb-[48px] leading-10">
            ClearLink has upgraded our remote meetings. High-quality video, 
            screen sharing, andtop-notch security make it essential for our team.
          </h3>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center w-[65%]">
              <img
                src={profile}
                alt='profile-lady'
              />

              <div className="ml-2">
                <h4 className="text-gray-900 font-inter text-md font-semibold">Sarah Thompson</h4>
                <p className="text-gray-600 font-inter text-md font-normal">Project Manager, Shopify</p>
              </div>
            </div>
            <div className="w-[27%] flex items-center justify-between">
              <img
                src={leftarrow}
                alt="left-arrow"
              />

              <img
                src={rightarrow}
                alt="right-arrow"
              />
            </div>
          </div>
        </div>
        <div className="w-[45%]">
          <img
            src={testimonailimg}
            alt="testimonial group"
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonial