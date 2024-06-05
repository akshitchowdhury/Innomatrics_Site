import React, { useState, useEffect, forwardRef } from "react";
import c1 from "../../assets/AppDev.jpg";
import c2 from "../../assets/webDesign.jpg";
import c3 from "../../assets/webDevelopment.jpg";
import c4 from "../../assets/digitalMarkt.webp";
import c5 from "../../assets/brandDesign.jpg";
import c6 from "../../assets/socialMedia.jpg";
import "./Services.css";
// import { Carousel } from "flowbite-react";
import ImageCardContainer from "./Carousel/ImageCardContainer";
import { Link } from "react-router-dom";
import app from "../../assets/serviceBg2.jpg";

// import image from '../../assets/image1.jpg'

const Services = forwardRef((props,ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(true);

  const images = [c1, c2, c3, c4, c5, c6];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMoving) {
        handleNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isMoving]);

  return (
    <>
      <div className="Services" ref={ref}>
        <div
          className="BgDiv relative flex flex-col items-start self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
          style={{ marginTop: "0.2px", height: "60vh" }}
        >
          
          <div className="flex flex-col my-12 items-start justify-start gap-4 text-start">
            <h1 className="text-3xl font-bold text-zinc-900 md:text-white md:text-5xl">
              Services
            </h1>
            
            
            <hr className="text-sky-600 w-[140%] " />
          </div>
          <div className="relative justify-center -my-10 space-x-2">
            <button className="text-white 
              bg-zinc-700 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
              text-center dark:bg-blue-600 dark:focus:ring-blue-800
              hover:bg-white hover:text-black hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
              Start a project together
            </button>
            <button className="text-zinc-700 
              bg-white focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
              text-center dark:bg-blue-600 dark:focus:ring-blue-800
              hover:bg-zinc-800 hover:text-white hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </div>

        <div>
          <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-start">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Overview
                </h2>
                <p className="mt-2 leading-8 text-2xl font-extrabold font-serif text-gray-900 sm:text-3xl">
                  With today’s fast-changing IT landscape, you must quickly
                  build new applications to meet consumer demands, reduce tech
                  debt, support legacy systems, and adopt new technologies –
                  quite a balancing act.
                </p>
              </div>
              <div className="mt-10">
                <p className="text-lg leading-8 text-gray-700">
                  We combine technical expertise, domain knowledge and practical
                  know-how to support your application development and
                  integration requirements, with a clear focus on scalability,
                  extensibility, reliability and most importantly driving
                  meaningful business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <h4 className="text-2xl sm:text-4xl md:text-2xl lg:text-2xl xl:text-3xl text-start font-bold text-orange-500">Services We Offer</h4> */}

        {/* <div className="carosuelBox object-cover w-full h- h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel className="carosuel w-full h-full">
            <img src={c1} alt="..." className="object-contain w-full h-full" />
            <img src={c2} alt="..." className="object-contain w-full h-full" />
            <img src={c3} alt="..." className="object-contain w-full h-full" />
            <img src={c4} alt="..." className="object-contain w-full h-full" />
            <img src={c5} alt="..." className="object-contain w-full h-full" />
            <img src={c6} alt="..." className="object-contain w-full h-full" />
          </Carousel>
        </div> */}

        <ImageCardContainer />
      </div>
    </>
  );
})

export default Services;
