import React from 'react';
import Accordion from './accordion';
import Lastaccordion from './lastAccordion';

const Faq = () => {
  return (
    <section className="realtive w-[85%] mx-auto py-[96px] flex items-start justify-between">
      <div className="w-[45%]">
        <p className="text-blue-700 font-inter text-xs font-semibold">Support</p>
        <h2 className="text-gray-800 font-inter text-3xl font-semibold mt-[12px] mb-[20px]">FAQs</h2>
        <p className="text-gray-500 font-inter text-sm font-normal">
          Everything you need to know about the product and billing. Can’t find the answer 
          you’re looking for? Please <a href="/" className="underline">chat to our friendly team.</a>
        </p>
      </div>

      <div className="w-[45%]">
        <div className="p-1">
          <Accordion
            title="How many participants can join a ClearLink video conference?"
            answer="ClearLink offers flexible meeting options. Depending on your subscription plan, 
            you can host meetings with varying numbers of participants. Our plans are designed to 
            accommodate small team collaborations and large-scale webinars, ensuring you have the 
            right fit for your needs."
          />
          <Accordion
            title="Can I use ClearLink on multiple devices?"
            answer="Yes, you can use ClearLink on multiple devices."
          />
          <Accordion 
            title="Is ClearLink compatible with other video conferencing platforms?" 
            answer="Yes, it is." 
          />
          <Accordion
            title="How does ClearLink ensure the security of my video conferences?"
            answer="Don't worry, it is secure, lol."
          />
          <Accordion 
            title="Do I need to download any software to use ClearLink?" 
            answer="No, all you need is a browser." 
          />
          <Lastaccordion 
            title="What kind of customer support does ClearLink provide?"
            answer="All types of customer service are provided at ClearLink"
          />
        </div>
      </div>
  </section>
  )
}

export default Faq