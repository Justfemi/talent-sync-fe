import React from 'react'
import largegroup from '../assets/largeGroup.png';
import camera from '../assets/camera.svg';
import noise from '../assets/noise.svg';
import security from '../assets/security.svg';
import calendar from '../assets/calendar.svg';
import arrow from '../assets/arrow.svg';

const Whychoose = () => {
  return (
    <section className="realtive w-[80%] mx-auto py-[56px]">
      <p className="text-blue-700 font-inter text-xs font-semibold">The ClearLink Advantage</p>
      <h2 className="text-gray-800 font-inter text-3xl font-semibold mt-[12px] mb-[20px]">Why choose ClearLink?</h2>
      <p className="text-gray-500 font-inter text-sm font-normal">
        In a world where connection is everything, ClearLink takes the lead. 
        Our cutting-edge video  <br /> conferencing app offers:
      </p>

      <img 
        className="absolute right-[350px] bottom-[-450px] w-[200px]"
        src={arrow}
        alt="curly arrow"
      />

      <div className="flex items-center justify-between mt-[60px]">
        <div className="w-[50%]">
          <div className="flex items-center gap-4">
            <div>
              <img
                src={camera}
                alt="camera-icon"
              />
              <h4 className="text-gray-900 font-inter text-lg font-semibold mt-[20px]">Crystal-clear HD video</h4>
              <p className="text-gray-600 font-inter text-xs font-normal mt-[8px]">
                No more pixelation or blurriness – just stunning, lifelike clarity 
                that brings your team closer in meetings.
              </p>
            </div>

            <div>
              <img
                src={noise}
                alt="noise-icon"
              />
              <h4 className="text-gray-900 font-inter text-lg font-semibold mt-[20px]">Noise-cancelling audio</h4>
              <p className="text-gray-600 font-inter text-xs font-normal mt-[8px]">
                Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-[60px]">
            <div>
              <img
                src={calendar}
                alt="calendar-icon"
              />
              <h4 className="text-gray-900 font-inter text-lg font-semibold mt-[20px]">Scheduling made easy</h4>
              <p className="text-gray-600 font-inter text-xs font-normal mt-[8px]">
                Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, 
                send invitations, and receive reminders in one place.
              </p>
            </div>

            <div>
              <img
                src={security}
                alt="security-icon"
              />
              <h4 className="text-gray-900 font-inter text-lg font-semibold mt-[20px]">Bank-grade security</h4>
              <p className="text-gray-600 font-inter text-xs font-normal mt-[8px]">
                Your privacy is our priority with bank-grade security protocols safeguarding your meetings 
                and data from unwanted intruders.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-[500px]">
          <img
            src={largegroup}
            alt="large-group"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Whychoose