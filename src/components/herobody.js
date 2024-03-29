import React from 'react'
// import videoCall from '../assets/right-img.png';
import aibot from '../assets/bot.svg';
import avatargroup from '../assets/avatargroup.svg';
import stars from '../assets/stars.svg';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';
import image5 from '../assets/image5.svg';
import image6 from '../assets/image6.svg';
import buttons from '../assets/buttons.svg';

const Herobody = () => {
  return (
    <div className="flex items-center justify-between w-[85%] mx-auto mt-[160px]">
      <div>
        <div>
          <h2 className="text-gray-800 font-inter text-4xl font-semibold mb-[12px]">
            Uniting the world, <br /> one video call at a time
          </h2>
          <p className="text-gray-500 font-inter text-lg font-normal w-[70%]">
            Experience the future of communication with ClearLink – 
            where crystal-clear video conferencing meets unparalleled simplicity.
          </p>
        </div>
        <div className="my-[48px] flex items-center gap-4">
          <button className="text-white font-inter font-medium text-md leading-6 rounded-full bg-blue-700 shadow-xs px-[24px] py-[14px]">
            Start your free trial
          </button>

          <div className="flex items-center gap-2">
            <img 
                src={aibot}
                alt="ai-bot"
            />
            <h4 className="text-blue-700 font-inter text-lg font-semibold">Discover AI assistant</h4>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={avatargroup}
            alt='group avatar'
          />
          <div>
            <div className="flex items-center gap-2">
              <img
                src={stars}
                alt="rating"
              />
              <h5 className="text-gray-700 font-inter text-md font-semibold">5.0</h5>
            </div>
            <div>
              <p className="text-gray-600 font-inter text-md font-medium">from 3,000+ reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[550px] rounded-lg border border-blue-200 bg-blue-50 shadow-3xl p-8">
        <div className="grid grid-cols-3 gap-4">
          <img 
            src={image1}
            alt='video-call'
            className="w-full h-full object-cover"
          />

          <img 
            src={image2}
            alt='video-call'
            className="w-full h-full object-cover"
          />

          <img 
            src={image3}
            alt='video-call'
            className="w-full h-full object-cover"
          />

          <img 
            src={image4}
            alt='video-call'
            className="w-full h-full object-cover"
          />

          <img 
            src={image5}
            alt='video-call'
            className="w-full h-full object-cover"
          />

          <img 
            src={image6}
            alt='video-call'
            className="w-full h-full object-cover"
          />
        </div>
        <img 
          src={buttons}
          alt="control-btns"
          className="mt-[40px] w-[250px] cursor-pointer mx-auto"
        />
      </div>
    </div>
  )
}

export default Herobody