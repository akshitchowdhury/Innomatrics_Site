import React, { forwardRef } from "react";
import app from "../../../assets/AppDev.jpg";
import app2 from "../../../assets/app2.jpg";
import approach from "../../../assets/approach.jpg";
import a1 from "../../../assets/appServices/strategicPlanApp.jpg";
import a2 from "../../../assets/appServices/usercentric.webp";
import a3 from "../../../assets/appServices/customDev.jpg";
import a4 from "../../../assets/appServices/crossPlatform.png";
import a5 from "../../../assets/appServices/qualityTest.png";
import a6 from "../../../assets/appServices/maintainenece.jpg";
import "./Appdev.css";

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-md rounded-lg p-6 m-4 flex-1 hover:scale-105
  transition ease-in-out duration-300">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AppDev= forwardRef((props,ref)=> {
  const services = [
    {
      title: "Strategic Planning",
      description:
        "We start by understanding your business goals, target audience, and technical requirements to develop a comprehensive strategy that guides the entire application design and development process.",
      image: a1,
    },
    {
      title: "User-Centric Design",
      description:
        "Our talented team of designers will create a visually stunning and intuitive user interface (UI) and user experience (UX) design that delights users and enhances engagement.",
      image: a2,
    },
    {
      title: "Custom Development",
      description:
        "Whether you need a mobile app, web app, or desktop application, we have the expertise to develop custom solutions that are scalable, secure, and built to perform.",
      image: a3,
    },
    {
      title: "Cross-Platform Compatibility",
      description:
        "We specialize in developing applications that work seamlessly across multiple platforms and devices, ensuring a consistent experience for users regardless of their preferred device or operating system.",
      image: a4,
    },
    {
      title: "Quality Assurance and Testing",
      description:
        "Our rigorous QA testing process ensures that your application is thoroughly tested for functionality, performance, security, and compatibility before launch, resulting in a high-quality and error-free product.",
      image: a5,
    },
    {
      title: "Maintenance and Support",
      description:
        "Our commitment to customer satisfaction doesn’t end at launch. We provide ongoing maintenance and support services to ensure that your application remains up-to-date, secure, and optimized for performance.",
      image: a6,
    },
  ];

  return (
    <div className="flex flex-col items-center pt:0 md:pt-10 pb-20 bg-white shadow-sm" ref={ref}>
      <div
        id="appDiv"  className="BgDiv relative flex flex-col
         items-start self-stretch px-20 py-20 font-medium text-center 
         leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
          style={{ height: "60vh" }}
        >
          
          <div className="flex flex-col my-12 items-start justify-start gap-4 text-start">
            <h1 className="text-3xl my-4 font-bold text-white md:text-white md:text-5xl">
              App Development
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
            <div className="text-xl text-lime-400">App Development</div>
            <div className="mt-2 text-sm md:text-base text-neutral-500">
              We focus on providing the right tool for product innovation and
              digital communication
            </div>
            <div className="mt-2 text-sm md:text-base text-zinc-800">
              <p>
                Innomatrics Technologies is your premier partner for creating
                innovative and user-centric applications that drive business
                growth and enhance user experiences. With our expertise in
                application design and development, we'll transform your ideas
                into robust and scalable solutions that set you apart from the
                competition
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

          <div className="flex flex-col p-4 px-4 w-full md:w-1/2 ">
            <div className="text-justify mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Our Approach</h1>
              <p className="mt-4 text-gray-600">
                We believe that successful applications are built on a foundation of strategic planning, creative design, and flawless execution. Our process begins with a deep dive into your business objectives, target audience, and industry landscape. From there, we work collaboratively with you to conceptualize, design, develop, and launch a tailored solution that meets your specific needs and exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto p-6">
        <div className="text-center mb-8 my-4">
          <h2 className="text-2xl font-semibold text-gray-800">Services We Offer</h2>
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
    </div>
  );
})

export default AppDev
