import React from 'react';
import shopify from '../assets/shopify.svg';
import coinbase from '../assets/coinbase.svg';
import dropbox from '../assets/dropbox.svg';
import intercom from '../assets/intercom.svg';
import marvel from '../assets/marvel.svg';
import automatic from '../assets/automatic.svg';

const Users = () => {
  return (
    <section className="text-center py-[56px]">
      <p className="text-gray-600 text-center font-inter text-xl font-medium">Join 1,500+ companies already video conferencing the ClearLink way</p>
      <div className="flex items-center gap-10 w-[80%] mx-auto mt-[48px]">
        <img
          src={shopify}
          alt='users-companies'
          className="w-[150px]"
        />

        <img
          src={coinbase}
          alt='users-companies'
          className="w-[150px]"
        />

        <img
          src={dropbox}
          alt='users-companies'
          className="w-[150px]"
        />

        <img
          src={intercom}
          alt='users-companies'
          className="w-[150px]"
        />

        <img
          src={marvel}
          alt='users-companies'
          className="w-[100px]"
        />

        <img
          src={automatic}
          alt='users-companies'
          className="w-[150px]"
        />
      </div>
    </section>
  )
}

export default Users