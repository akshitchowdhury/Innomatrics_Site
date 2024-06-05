import React, { forwardRef } from "react";
import app from "../../../assets/webDevelopment.jpg";
import app2 from "../../../assets/webDevelopment2.jpg";
import w1 from "../../../assets/webServices/w1.jpg";
import w2 from "../../../assets/webServices/w2.jpg";
import w3 from "../../../assets/webServices/w3.jpg";
import w4 from "../../../assets/webServices/w4.webp";
import w5 from "../../../assets/webServices/w5.jpg";
import w6 from "../../../assets/webServices/w6.avif";
import "./WebDev.css";

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-md rounded-lg p-6 m-4 flex-1
  hover:scale-105 transition ease-in-out duration-300">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WebDev= forwardRef((props,ref)=> {
  const services = [
    {
      title: "Custom Development",
      description:
        "Whether you need a simple brochure website or a complex web application, our team of experienced developers has the expertise to bring your vision to life with clean, efficient, and scalable code.",
      image: w1,
    },
    {
      title: "Content Management Systems (CMS)",
      description:
        "We specialize in building websites on popular CMS platforms like WordPress, Joomla, and Drupal, empowering you to easily update and manage your site content without any technical expertise.",
      image: w2,
    },
    {
      title: "E-commerce Solutions",
      description:
        "From small online shops to enterprise-level e-commerce platforms, we develop secure and feature-rich e-commerce websites that drive sales, streamline processes, and enhance the shopping experience for your customers.",
      image: w3,
    },
    {
      title: "Responsive Design",
      description:
        "We ensure that your website is fully responsive and optimized for seamless performance across all devices, ensuring a consistent and user-friendly experience for visitors on desktops, tablets, and smartphones.",
      image: w4,
    },
    {
      title: "Integration Services",
      description:
        "We can integrate your website with third-party APIs, databases, and systems to enhance functionality, improve efficiency, and streamline processes.",
      image: w5,
    },
    {
      title: "Performance Optimization",
      description:
        "We optimize your website for speed, performance, and security, ensuring that it loads quickly, functions smoothly, and provides a safe browsing experience for your visitors.",
      image: w6,
    },
  ];

  return (
    <div className="flex flex-col items-center pt:0 md:pt-10 pb-20 bg-white shadow-sm" ref={ref}>
      <div
        id="webDevDiv"  className="BgDiv relative flex flex-col 
        items-start self-stretch px-20 py-20 font-medium text-center 
        leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
          style={{ height: "60vh" }}
        >
          
          <div className="flex flex-col my-12 items-start justify-start gap-4 text-start">
            <h1 className="text-3xl my-4 font-bold text-white md:text-white md:text-5xl ">
              Website Development
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
            <div className="text-xl text-lime-400">Technology</div>
            <div className="mt-2 text-sm md:text-base text-neutral-500">
              We focus on providing the right tool for product innovation and
              digital communication
            </div>
            <div className="mt-2 text-sm md:text-base text-zinc-800">
              <p>
                Innomatrics Technologies leads the way in transformative web
                development solutions. With a fusion of creativity and technical
                prowess, we engineer dynamic websites that captivate audiences
                and drive results. Our team embraces the latest trends and
                technologies to ensure your online platform stands out in a
                crowded digital landscape. From robust backend systems to
                engaging user interfaces, we meticulously craft every aspect of
                your web presence with precision and flair. Experience
                innovation at its finest with Innomatrics Technologies as your
                trusted partner in web development excellence.
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-[56%]">
            <img
              loading="lazy"
              src={app}
              className="w-full h-auto aspect-w-16 aspect-h-10"
              style={{ borderRadius: "5%", boxShadow: "gray 3px 10px 10px" }}
              alt="Web Development"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-[65vw]">
        <div className="flex flex-col md:flex-row gap-20 -mx-12 md:-mx-36">
          <div className="flex w-full md:w-1/2">
            <img
              loading="lazy"
              src={app2}
              className="w-full h-auto rounded-lg shadow-lg"
              alt="Our Approach"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <div className="text-justify mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Our Approach</h1>
              <p className="mt-4 text-gray-600">
                We understand that your website is more than just an online presence - it's a powerful tool that can help you connect with your audience, showcase your brand, and drive business growth. Our approach to website development is centered around collaboration, innovation, and excellence. We work closely with you to understand your unique needs and goals, leveraging the latest technologies and best practices to deliver a website that exceeds your expectations.
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

export default WebDev