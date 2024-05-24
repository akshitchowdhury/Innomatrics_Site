import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NAv.css';

const ServiceHover = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <li
      className="relative serviceBlock text-white rounded
      
       hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-zinc-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      onMouseEnter={handleMouseEnter}
      style={{
        marginTop: "-1px"
      }} 
     
    >
      Services
      {isDropdownVisible && (
        <div className="dropdown-menu absolute top-10 left-0 text-sm
          border border-gray-200 w-48 bg-white shadow-lg rounded-md mt-2
          transition-all duration-300 ease-in-out transform 
          hover:scale-105
          dark:bg-gray-800 dark:border-gray-700"
          onMouseLeave={handleMouseLeave}
        >
          <ul className="dropdownList text-gray-800 dark:text-gray-200
          hover:scale-100 transition ease-in-out duration-300
          text-sm"
          >
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link to="/appdev">Application Development</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link to="/webdev">Website Development</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link to="/webdesign">Website Design</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link to="/digitalmarket">Digital Marketing</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link to="/socialmedia">Social Media Marketing</Link>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default ServiceHover;
