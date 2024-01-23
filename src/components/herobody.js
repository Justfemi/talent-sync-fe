import React from 'react'
import videoCall from '../assets/right-img.png';
import aibot from '../assets/bot.svg';
import avatargroup from '../assets/avatargroup.svg';
import stars from '../assets/stars.svg';

const Herobody = () => {
  return (
    <div className="flex items-center justify-between w-[80%] mx-auto mt-[160px]">
      <div>
        <div>
          <h2 className="text-gray-800 font-inter text-4xl font-semibold mb-[12px]">
            Uniting the world, <br /> one video call at a time
          </h2>
          <p className="text-gray-500 font-inter text-lg font-normal w-[80%]">
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
              <h5>5.0</h5>
            </div>
            <div>
              <p>from 3,000+ reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[600px] h-[490px]">
        <img 
          src={videoCall}
          alt='video-call'
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default Herobody