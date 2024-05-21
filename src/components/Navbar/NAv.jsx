import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/innomatric_logo_only.png";
import "./NAv.css";
import { Dropdown } from "flowbite-react";
function NAv() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-900 dark:bg-gray-900 w-full z-20 top-0 start-0 relative sticky">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link
          to="/"
          className="flex flex-col items-center space-x-2 rtl:space-x-reverse"
        >
          <img src={logo} className="h-24" alt="Flowbite Logo" />

          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/contact">
            {" "}
            <button
              type="button"
              className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
                text-sm px-6 py-3 text-center dark:bg-blue-600 dark:focus:ring-blue-800 
               hover:bg-zinc-800 hover:text-white
               hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
            >
              Get Started
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-zinc-600 text-white border border-gray-200 md:hidden">
            <ul className="flex flex-col p-4 md:p-0  font-thin text-sm uppercase">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3  hover:text-black"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 hover:text-black"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li >
                <Link
                  to="/services"
                  className="block py-2 px-3 hover:text-black"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="block py-2 px-3 hover:text-black"
                  onClick={toggleMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="block py-2 px-3 hover:text-black"
                  onClick={toggleMenu}
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 hover:text-black"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col gap-6 p-4 md:p-0 mt-4  font-medium	
            border border-gray-100 rounded-lg  
           md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
           text-lg
            dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 md:hover:text-zinc-900"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-zinc-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                About
              </Link>
            </li>
            
            <ul className="flex flex-row gap-x-0.1">
            <li className="services">
              
              <Link
                to="/services"
                className="block py-2 px-3 text-white rounded
                 hover:bg-gray-100 md:hover:bg-transparent 
                 
                 md:p-0 md:hover:text-zinc-900 dark:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white 
                  md:dark:hover:bg-transparent dark:border-gray-700"
              >
              Services
    </Link>
            </li>
            <li className="serviceBlock  text-white rounded 
                 hover:bg-gray-100 md:hover:bg-transparent 
                 
                 md:p-0 md:hover:text-zinc-900 dark:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white 
                  md:dark:hover:bg-transparent dark:border-gray-700">
            <Dropdown  className="justify-start items-start py-2
              hover:text-sm 
               " inline dismissOnClick={false}>
      <Dropdown.Item >
      <Link 
                to="/appdev">
      APP DEVELOPMENT
      </Link></Dropdown.Item>

      <Link
                to="/webdev">
      <Dropdown.Item>WEB DEVELOPMENT</Dropdown.Item>
      </Link>
      
      <Link
                to="/webdesign">
      <Dropdown.Item>WEBSITE DESIGN</Dropdown.Item>
      </Link>

      <Link
                to="/logodesign">
      <Dropdown.Item>LOGO DESIGN</Dropdown.Item>
      </Link>

      <Link
                to="/digitalmarket">
      <Dropdown.Item>DIGITAL MARKETING</Dropdown.Item>
      </Link>
      <Link
                to="/socialmedia">
      <Dropdown.Item>SOCIAL MEDIA MARKETING</Dropdown.Item>
      </Link>
    </Dropdown>
            </li>
            </ul>
            <li>
              <Link
                to="/portfolio"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-zinc-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-zinc-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-zinc-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NAv;
