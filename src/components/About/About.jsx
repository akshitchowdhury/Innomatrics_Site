import React from "react";
import "./About.css"; // Import Tailwind styles
import aboutMe from "../../assets/aboutMe.jpeg";
import about from "../../assets/about.jpg";
import OurVision from "../Home/Our Vision/OurVision";
import OurMission from "../Home/Our Mission/OurMission";
import inno from "../../assets/m1.webp";
import digi from "../../assets/m2.jpg";
import qlty from "../../assets/m3.jpg";
import grwth from "../../assets/m4.png";

import innovation from "../../assets/mission1.jpg";
import digiTransform from "../../assets/mission2.jpg";
import quality from "../../assets/mission3.jpg";
import growth from "../../assets/mission4.jpg";
import ClientsCarousel from "../ClientsLogo/ClientsCarousel";
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

const About = () => {
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
  return (
    <>
      <section className="about-section bg-cover bg-center">
        <div className="container mx-auto px-4 py-20 md:py-40">
          <div className="flex flex-col my-[100px] items-start justify-start gap-4 text-start">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              About US - Innomatrics Technologies
            </h1>
            <p className="text-xl font-semibold text-white md:text-2xl">
              Helping businesses thrive with digital and tech solutions.
            </p>
            
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row gap-8 px-4 py-8 lg:px-28 lg:py-16">
        <div className="aboutText w-full lg:w-1/2 bg-gray-100 rounded-lg shadow-md p-6">
          <p className="text-xl text-gray-800 font-semibold mb-4">
            Welcome to Innomatrics Technologies, where innovation meets excellence in the realm of digital solutions.
          </p>
          <p className="text-base text-gray-700 mb-4">
            As a tech-driven consultancy company, we specialize in empowering businesses to thrive in the ever-evolving online landscape. With a comprehensive suite of services including website design, web app development, mobile app development, SEO, and digital marketing, we are committed to catalyzing your growth and maximizing your online presence.
          </p>
          <p className="text-base text-gray-700 mb-4">
            At Innomatrics, we understand the unique challenges businesses face in the digital sphere, and we are dedicated to crafting tailored solutions that address your specific needs and objectives. Whether you're a startup looking to establish your online presence or a seasoned enterprise seeking to optimize your digital strategy, our team of experts is here to guide you every step of the way.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Driven by a passion for innovation and a commitment to excellence, we take pride in delivering cutting-edge solutions that not only meet but exceed our clients' expectations. With a focus on collaboration, transparency, and results, we strive to build long-lasting partnerships that drive success and fuel growth.
          </p>
          <p className="text-base text-gray-700">
            Discover the power of digital transformation with Innomatrics Technologies. Let's embark on a journey of innovation together, and unlock the full potential of your business in the digital age.
          </p>
        </div>
        <div className="aboutMe bg-gray-100 w-full lg:w-1/2 p-3 rounded-lg shadow-md">
          <img src={aboutMe} alt="About Us" className="w-full rounded-lg" />
        </div>
      </div>

      {/* Vision */}
      <div className="missonVision">
      <div className="bg-inherit p-8">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl text-white text-center mb-8">Our Vision</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-orange-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
              <img src={innovation} alt="Empowering Innovation" className="w-full rounded h-1/2 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Empowering Innovation</h3>
                <p className="text-gray-700 text-sm">At Innomatrics Technologies, we empower innovation by providing cutting-edge tech solutions tailored to meet the needs of our clients.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-blue-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
              <img src={digiTransform} alt="Driving Digital Transformation" className="w-full h-1/2 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Driving Digital Transformation</h3>
                <p className="text-gray-700 text-sm">Our mission is to drive digital transformation for businesses by leveraging cutting-edge technologies.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-amber-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
              <img src={quality} alt="Delivering Excellence" className="w-full h-1/2 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Delivering Excellence</h3>
                <p className="text-gray-700 text-sm">We are committed to delivering excellence by providing high-quality, reliable, and scalable tech solutions.</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-red-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
              <img src={growth} alt="Enabling Growth" className="w-full h-1/2 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Enabling Growth</h3>
                <p className="text-gray-700 text-sm">Our mission is to enable growth for our clients by offering innovative tech solutions that empower them to adapt and evolve.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-inherit p-8">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl text-white text-center mb-8">Our Mission</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-fuchsia-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
              <img src={inno} alt="Enhancing User Experience" className="w-full rounded h-1/2 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Enhancing User Experience</h3>
                <p className="text-gray-700 text-sm">At Innomatrics Technologies, we empower innovation by providing cutting-edge tech solutions tailored to meet the needs of our clients.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-violet-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
              <img src={digi} alt="Ensuring Data Security" className="w-full h-1/2 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ensuring Data Security</h3>
                <p className="text-gray-700 text-sm">Our mission is to drive digital transformation for businesses by leveraging cutting-edge technologies.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-emerald-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
              <img src={qlty} alt="Continuous Learning" className="w-full h-1/2 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-700 text-sm">We are committed to delivering excellence by providing high-quality, reliable, and scalable tech solutions.</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-lime-500 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
              <img src={grwth} alt="Social Impact" className="w-full h-1/2 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Social Impact</h3>
                <p className="text-gray-700 text-sm">Our mission is to enable growth for our clients by offering innovative tech solutions that empower them to adapt and evolve.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="bg-inherit text-center py-8 lg:py-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          ALLIANCES & PARTNERS
        </h2>
        <p className="text-base lg:text-lg text-gray-700 mb-8">
          Bringing our clients the best through the power of partnerships
        </p>
        
        <h4 className="text-left text-2xl lg:text-2xl font-bold text-gray-800 mb-4">
          OUR CLIENTS
        </h4>
        <div className="flex gap-5 justify-between py-4 mt-3 
        w-full max-w-[802px]
        mx-[15%] md:mx-[25%] 
         max-md:flex-wrap max-md:max-w-full"> 
          
            <ClientsCarousel clientLogos={clientLogos} />
         </div>
        

      </div>
    </>
  );
};

export default About;
