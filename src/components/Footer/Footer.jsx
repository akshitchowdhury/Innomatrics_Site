import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import QuickLinks from "./QuickLinks";
import WhatWeDo from "./WhatWeDo";
import ImportantLinks from "./ImportantLinks";
import AdressBlock from "./AdressBlock";

const Footer = () => {
  return (
    <footer className="footer bg-blue-900 h-auto">
      <div className="footerBlock1 mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div className=" md:col-span-1">
            {/* <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Quick Links</h2>
            <ul className="Qlinks text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4  ">
                <Link to="/" className="navbar-links">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/about" className="navbar-links">About Us</Link>
              </li>
              <li className="mb-4">
                <Link to="/projects" className="navbar-links">Projects</Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="navbar-links">Contact Me</Link>
              </li>
            </ul> */}
            <QuickLinks />
          </div>

          <div className=" md:col-span-1">
            <WhatWeDo />
          </div>

          <div className="  md:col-span-1">
            <ImportantLinks />
          </div>

          <AdressBlock/>
        </div>
      </div>

      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          © 2024 <a href="https://flowbite.com/">Innomatrics Technologies</a>.
          All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          {/* Add other social media links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
