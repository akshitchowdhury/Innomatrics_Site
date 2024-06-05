import React, { forwardRef, useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import c1 from "../../assets/portfolioLogo/MRItow.jpg";
import test from "../../assets/portfolio/test.png";
import c2 from "../../assets/portfolioLogo/RoyalKing.jpg";
import c3 from "../../assets/portfolioLogo/chanconst.jpg";
import c4 from "../../assets/portfolioLogo/dstudio.jpg";
import c5 from "../../assets/portfolioLogo/goldkey.jpg";
import c6 from "../../assets/portfolioLogo/infinitytravels.jpg";
import c7 from "../../assets/portfolioLogo/ngo.jpg";
import c8 from "../../assets/portfolioLogo/osprezt.jpg";
import c9 from "../../assets/portfolioLogo/skb.jpg";
import c10 from "../../assets/portfolioLogo/thriupathiTours.jpg";
import c11 from "../../assets/portfolioLogo/vklights.jpg";

// import { Carousel } from "flowbite-react";
import ImageCardContainer from "../Services/Carousel/ImageCardContainer";
import OurVision from "./Our Vision/OurVision";
import OurMission from "./Our Mission/OurMission";
import ClientsCard from "../ClientsLogo/ClientsCard";
import ClientsCarousel from "../ClientsLogo/ClientsCarousel";
import Join from "./JoinTeam/Join";
import CountRise from "./CountRise/CountRise";
import Industry from "./Industry/Industry";

const Home = forwardRef((props, ref) => {
  const clientLogos = [
    {
      image: c1,
    },
    {
      image: c2,
    },
    {
      image: c3,
    },
    {
      image: c4,
    },
    {
      image: c5,
    },
    {
      image: c6,
    },
    {
      image: c7,
    },
    {
      image: c8,
    },
    {
      image: c9,
    },
    {
      image: c10,
    },
    {
      image: c11,
    },
  ];

  const [isAnimating, setIsAnimating] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prevState) => !prevState); // Toggle animation state
    }, 1000); // Adjust the delay according to your preference (in milliseconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount
  return (
    <>
      <div className="home flex flex-col" ref={ref}>
        <div className="p-5 md:p-20 flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-2/3">
            <div className="flex flex-col my-auto text-xs leading-4">
              <div className="text-4xl md:text-7xl font-semibold text-white leading-tight md:leading-[109px]">
                Innomatrics Technologies
              </div>
              <div className="mt-3 text-sm  text-white flex items-center justify-center md:justify-start">
                <hr className="w-1/6 md:w-1/12" />
                <span className="mx-2 md:mx-4 text-base md:text-2xl font-semibold">
                  Innovate Inspire Integrate
                </span>
                <hr className="w-1/6 md:w-1/12" />
              </div>
              <Link to="/contact" className="self-center md:self-start">
                <button
                  type="button"
                  className="text-zinc-800 px-6 mt-6 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm py-4 text-center dark:bg-blue-600 dark:focus:ring-blue-800 hover:bg-white hover:text-black hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
                >
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Industry />
      </div>

      <div className="ServicesMission">
      <div className="p-8 ">
        <h2 className="text-4xl text-white text-center">Our Services</h2>

        <ImageCardContainer />
      </div>

      <div style={{ padding: "4%" }} className="flex flex-col sm:flex-row">
        <div style={{ flex: 1, marginRight: "2%" }}>
          <OurVision />
        </div>
        <div style={{ flex: 1 }}>
          <OurMission />
        </div>
      </div>
</div>
      <div className="bg-white">
        <Join />

        <CountRise />
      </div>
      <div className="ServicesMission flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="text-3xl md:text-4xl font-bold text-center my-12 text-white mb-12">
          Our Clients
        </div>
        <div className="mt-1.5 text-lg leading-4 text-center text-white max-md:max-w-full">
          We have been working with some of the best players in the industry
        </div>
        <div className="flex gap-5 justify-between py-4 mt-3 w-full max-w-[802px] max-md:flex-wrap max-md:max-w-full">
          <ClientsCarousel clientLogos={clientLogos} />
        </div>
      </div>
    </>
  );
});

export default Home;
