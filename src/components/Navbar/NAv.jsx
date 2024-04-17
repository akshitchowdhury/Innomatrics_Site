import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/innomatric_logo_only.png";
import "./NAv.css";
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
          <img src={logo} className="h-16" alt="Flowbite Logo" />

          <h1 className="text-white text-sm text-bold">
            Innomatrics Technologies{" "}
          </h1>
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/contact">
            {" "}
            <button
              type="button"
              className="text-white 
              bg-zinc-700 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
              text-center dark:bg-blue-600 dark:focus:ring-blue-800
              hover:bg-zinc-800 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out"
            >
              Get a Quote
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
            <ul className="flex flex-col p-4 md:p-0 text-lg font-semibold uppercase">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 hover:text-black"
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
              <li>
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 text-lg font-semibold	 uppercase border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 md:hover:text-black"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-black dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-black dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-black dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-black dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-black dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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

// import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from 'flowbite-react';
// import logo from '../../assets/innoLogo.jpeg'
// import { Link } from 'react-router-dom';
// import './NAv.css'
// import DropdownBasicExample from './Event List/DropdownButton';
// import { useState } from 'react';

// export default function NAv() {
//   const [activeLink, setActiveLink] = useState('');

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <Navbar className='navbar' fluid rounded style={{height: '100px'}}>
//       <NavbarBrand href="https://playpawws.com/">
//         <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
//         <span className="bubblegum-sans-regular self-center whitespace-nowrap text-xl text-fuchsia-900 font-semibold dark:text-white" >Play Pawws</span>
//       </NavbarBrand>
//       <div className="flex md:order-2 ">
//         <Button ><Link to='/contact' >Book Now!</Link></Button>
//         <NavbarToggle />
//       </div>
//       <NavbarCollapse className='NavbarCollapse'>

//       <Navbar.Link href="#"  >
//       <Link className='navbar-link' to="/" >
//           Home
//         </Link>
//         </Navbar.Link>
//         <Navbar.Link href="#" > <Link className='navbar-link '  to="/about">About</Link></Navbar.Link>
//         {/* <Navbar.Link href="#"> <Link className='navbar-link' to="/attractions">Attractions</Link></Navbar.Link> */}
//         <Navbar.Link href="#" ><Link className='navbar-link' to="/events">Events</Link></Navbar.Link>
//         <Navbar.Link href="#" >
//         <div className="pawDropDown">
//         <DropdownBasicExample /></div></Navbar.Link>
//         <Navbar.Link href="#"><Link className='navbar-link ' to="/franchise">Franchise</Link></Navbar.Link>
//         <Navbar.Link href="#"> <Link className='navbar-link' to="/pricing">Pricing</Link></Navbar.Link>
//         <Navbar.Link href="#"> <Link className='navbar-link' to="/contact">Contact</Link> </Navbar.Link>

//       </NavbarCollapse>
//     </Navbar>
//   );
// }
