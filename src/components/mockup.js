import React from 'react'
import checkmark from '../assets/checkmark.svg';
import mockup from '../assets/mockup.png'

const Mockup = () => {
  return (
    <section className="w-[100%] flex items-center justify-end pt-[96px]">
      <div className="w-[45%]">
        <h1 className="text-gray-900 font-inter text-2xl font-semibold leading-7 tracking-tighter">Ready to clear the path to perfect <br /> communication?</h1>

        <div className="mt-[32px] ml-[16px]">
          <div className='flex items-center gap-3 mb-[20px]'>
            <img
              src={checkmark}
              alt="check-mark"
            />

            <p className="text-gray-600 font-inter text-sm font-normal leading-8">30 days free trial</p>
          </div>

          <div className='flex items-center gap-3 mb-[20px]'>
            <img
              src={checkmark}
              alt="check-mark"
            />

            <p className="text-gray-600 font-inter text-sm font-normal leading-8">Cancel at any time</p>
          </div>

          <div className='flex items-center gap-3 mb-[20px]'>
            <img
              src={checkmark}
              alt="check-mark"
            />

            <p className="text-gray-600 font-inter text-sm font-normal leading-8">Access to all features</p>
          </div>

          <div className='flex items-center gap-3 mb-[20px]'>
            <img
              src={checkmark}
              alt="check-mark"
            />

            <p className="text-gray-600 font-inter text-sm font-normal leading-8">Personalized onboarding</p>
          </div>
        </div>

        <div className="mt-[20px]">
          <button className="text-gray-900 font-inter font-semibold text-md leading-6 rounded-full border border-gray-400 bg-white shadow-xs px-[24px] py-[14px] mr-[10px]">
            Talk to sales
          </button>

          <button className="text-white font-inter font-medium text-md leading-6 rounded-full bg-blue-700 shadow-xs px-[24px] py-[14px]">
            Start your free trial
          </button>
        </div>
      </div>

      <div className='w-[45%]'>
        <img
          src={mockup}
          alt="check-mark"
          className='w-full h-full object-cover'
        />
      </div>
    </section>
  );
}

export default Mockup