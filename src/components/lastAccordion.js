import React, {useState} from 'react';
import plusbtn from '../assets/plus.svg';
import minusbtn from '../assets/minus.svg';

const Lastaccordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={`p-[20px] my-1 rounded-lg ${accordionOpen ? 'bg-gray-50' : 'bg-gray-0'}`}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="mb-3 text-gray-900 font-inter text-lg font-semibold text-left">{title}</span>
        {accordionOpen ? 
          ( <img
            src={minusbtn}
            alt="minus button"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />) : (
            <img
              src={plusbtn}
              alt="plus button"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          )
        }
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-gray-600 font-inter text-md font-normal leading-7">{answer}</div>
      </div>
    </div>
  );
}

export default Lastaccordion