import React, { forwardRef } from "react";
import app from "../../../assets/webDesign.jpg";
import app2 from "../../../assets/webDesign2.jpg";
import approach from "../../../assets/wDesingApproach.webp";
import "./WebDesign.css";
import w1 from "../../../assets/strategicPlan.jpg";
import w2 from "../../../assets/webDevServices/customDesign.jpg";
import w3 from "../../../assets/webDevServices/responsive.jpg";
import w4 from "../../../assets/webDevServices/cms.avif";
import w5 from "../../../assets/webDevServices/seo.jpg";
import w6 from "../../../assets/webDevServices/performance.jpg";

const ServicesCard = ({ image,title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 m-4 flex-1 hover:scale-105
  transition ease-in-out duration-300">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WebDesign =  forwardRef((props,ref) =>{
  const services = [
    {
      title: "Strategic Planning",
      description: "We start by understanding your business objectives, target audience, and competition to develop a strategic plan that guides the entire website design and development process."
      ,image: w1
    },
    {
      title: "Custom Design",
      description: "Our talented team of designers will create a visually stunning and user-friendly website design that reflects your brand identity and engages visitors from the moment they land on your site."
      ,image: w2 },
    {
      title: "Responsive Development",
      description: "With mobile usage on the rise, we ensure that your website is fully responsive and optimized for seamless performance across all devices, including smartphones, tablets, and desktops."
      ,image: w3 },
    {
      title: "Content Management Systems (CMS)",
      description: "We specialize in building websites on robust and flexible CMS platforms like WordPress, Joomla, and Drupal, empowering you to easily update and manage your site content without any technical expertise."
      ,image: w4},
    
    {
      title: "Search Engine Optimization (SEO)",
      description: "Our SEO experts will optimize your website for search engines, helping you improve your visibility and rank higher in search results to attract more organic traffic."
      ,image: w5},
    {
      title: "Performance Optimization",
      description: "We optimize your website for speed, performance, and security, ensuring that it loads quickly, functions smoothly, and provides a safe browsing experience for your visitors."
      ,image: w6}
  ];
  return (
    <div className="flex flex-col items-center pt:0 md:pt-10 pb-20 bg-white shadow-sm" ref={ref}>
      <div
        id="webDesDiv"  className="BgDiv relative flex flex-col items-start self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
          style={{ height: "60vh" }}
        >
          
          <div className="flex flex-col my-12 items-start justify-start gap-4 text-start">
            <h1 className="text-3xl my-4 font-bold text-white md:text-white md:text-5xl ">
              Website Design
            </h1>
            
            
            <hr className="text-sky-600 w-[140%] " />
          </div>
          {/* <div className="relative justify-center -my-10 space-x-2">
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
          </div> */}
        </div>

      <div className="mt-16 max-w-[90vw]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-[44%]">
            <div className="text-xl text-lime-400">Website Design</div>
            <div className="mt-2 text-sm md:text-base text-neutral-500">
              We focus on providing the right tool for product innovation and
              digital communication
            </div>
            <div className="mt-2 text-sm md:text-base text-zinc-800">
              <p>
                At Innomatrics Technologies, we believe that your website is
                more than just a digital storefront - it's a powerful tool that
                can help you connect with your audience, showcase your brand,
                and drive business growth. With our comprehensive website design
                and development services, we'll help you create a stunning and
                highly functional website that captivates visitors and converts
                them into loyal customers.
              </p>
            </div>
          </div>
          <div className="flex flex-auto w-full md:w-[40%]">
            <img
              loading="lazy"
              src={app2}
              className="w-full h-auto aspect-w-16 aspect-h-10"
              style={{ borderRadius: "5%", boxShadow: "gray 3px 10px 10px" }}
              alt="App Development"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-[65vw] ">
        <div className="flex flex-col md:flex-row gap-20 -mx-12 md:-mx-36 ">
          <div className="flex w-full md:w-1/2">
            <img
              loading="lazy"
              src={approach}
              className="w-full h-auto rounded-lg shadow-lg"
              alt="App Development"
            />
          </div>

          <div className="flex flex-col  w-full md:w-1/2 ">
            <div className="text-justify mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Our Approach</h1>
              <p className="mt-4 text-gray-600">
                We understand that every business is unique, which is why we
                take a personalized approach to website design and development.
                Our process begins with a thorough analysis of your business
                goals, target audience, and brand identity. From there, we work
                closely with you to develop a customized strategy that aligns
                with your objectives and exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //-------------------------------------------// */}

      <div className=" mx-auto p-6">
        <div className="text-center mb-8 my-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Services We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>

      {/* Add other sections similarly */}
    </div>
  );
})

export default WebDesign