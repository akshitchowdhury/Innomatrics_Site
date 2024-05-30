import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import QuickLinks from "./QuickLinks";
import WhatWeDo from "./WhatWeDo";
import ImportantLinks from "./ImportantLinks";
import AdressBlock from "./AdressBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild, faEnvelope, faPaw, faPhone, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { generateLink } from '@reslear/whatsapp-link';



const Footer = ({ phoneNumber, message }) => {
    const handleClick = () => {
      const url = generateLink(phoneNumber=8431655799, message="Welcome to Innomatrics Technologies...Feel free to connect with us");
      window.open(url, '_blank');
    };
  
  return (
    <footer className="footer bg-blue-900 h-auto">
      <div className="footerBlock1 mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div className=" md:col-span-1">
           
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
         
          <div className="socialIcons absolute right-16 -my-[16px] flex flex-row gap-x-6">
          <a href="https://www.instagram.com/innomatrics_tech/" ><FontAwesomeIcon icon={faInstagram}  /></a>
      <a href="https://www.linkedin.com/in/innomatrics-technologies-b573952a8/" ><FontAwesomeIcon icon={faLinkedin}  /></a>
      <p> <FontAwesomeIcon icon={faWhatsapp} onClick={handleClick}  /></p>
      
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
