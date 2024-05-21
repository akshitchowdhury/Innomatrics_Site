import React, { useState } from 'react';
import indus1 from '../../../assets/brandDesign.jpg';
import data from './data';

const Industry = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="container mx-auto py-16 px-4 my-14">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        {/* First Column */}
        <div className="w-full lg:w-1/3">
          <ul className="text-lg md:text-xl text-white 
           space-y-4">
            {data.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-orange-500 transition ease-in-out duration-300"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Second Column */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            {hoveredItem !== null ? data[hoveredItem].title : "Industry Solutions"}
          </h2>
          <p className="text-base md:text-lg text-white mb-6">
            {hoveredItem !== null ? data[hoveredItem].desc : "Hover over an industry to see more information."}
          </p>
          <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300">
            Learn More
          </button>
        </div>
        
        {/* Third Column */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={hoveredItem !== null ? data[hoveredItem].image : indus1}
            alt="Industry"
            className="w-full h-auto max-w-sm rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Industry;
