import React from "react";
import app from "../../../assets/digitalMarkt.webp";
import app2 from "../../../assets/digitalMarkt2.webp";
import approach from "../../../assets/digitalMarktApproach.webp";
import d1 from "../../../assets/digitalMarketing/d1.avif";
import d2 from "../../../assets/digitalMarketing/d2.jpg";
import d3 from "../../../assets/digitalMarketing/d3.avif";
import d4 from "../../../assets/digitalMarketing/d4.avif";
import d5 from "../../../assets/digitalMarketing/d5.png";
import d6 from "../../../assets/digitalMarketing/d6.webp";

import "./SocialMedia.css";

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-md rounded-lg p-6 m-4 flex-1">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function SocialMedia() {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Increase your website's visibility and rank higher in search engine results pages (SERPs) with our comprehensive SEO services, including keyword research, on-page optimization, link building, and content creation.",
      image: d1,
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive targeted traffic to your website and generate leads or sales with our expertly managed PPC campaigns on platforms like Google Ads, Bing Ads, and social media advertising.",
      image: d2,
    },
    {
      title: "Social Media Marketing",
      description: "Build brand awareness, engage with your audience, and drive conversions through strategic social media marketing campaigns on platforms such as Facebook, Instagram, Twitter, LinkedIn, and more.",
      image: d3,
    },
    {
      title: "Content Marketing",
      description: "Create valuable and relevant content that attracts, educates, and converts your audience, including blog posts, articles, infographics, videos, and more.",
      image: d4,
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and drive customer loyalty with personalized and targeted email marketing campaigns that deliver the right message to the right audience at the right time.",
      image: d5,
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description: "Optimize your website and marketing campaigns to improve conversion rates and maximize the return on your investment (ROI).",
      image: d6,
    },
    
  ];

  return (
    <div className="flex flex-col items-center pt-10 pb-20 bg-white shadow-sm">
      <div className="BgDiv relative flex flex-col items-center self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={app}
          className="AppBg object-cover absolute inset-0 size-full"
        />
        <div className="relative -mt-4 text-3xl font-extrabold max-md:mr-2.5 max-md:max-w-full">
          Make your Digital presence matter
        </div>
        <div className="relative text-sm mt-2 text-neutral-600 max-w-[90vw] max-md:text-base">
          We are a full service technology and digital solutions company with
          over 20 years of experience in industry.
        </div>
        <div className="relative justify-center mt-4 space-x-2">
          <button className="px-4 py-1.5 text-xs text-white bg-zinc-900 rounded-sm">
            Start a project together
          </button>
          <button className="px-2 py-1.5 text-xs bg-white border border-zinc-900 rounded-sm">
            Read More
          </button>
        </div>
      </div>

      <div className="mt-16 max-w-[90vw]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-[44%]">
            <div className="text-xl text-lime-400">Digital Marketing</div>
            <div className="mt-2 text-sm md:text-base text-neutral-500">
              We focus on providing the right tool for product innovation and
              digital communication
            </div>
            <div className="mt-2 text-sm md:text-base text-zinc-800">
              <p>
                Innomatrics Technologies is your trusted partner for driving
                online visibility, engagement, and growth through strategic
                digital marketing solutions. With our expertise in the
                ever-evolving digital landscape, we'll help you reach your
                target audience, amplify your brand presence, and achieve your
                business goals.
              </p>
            </div>
          </div>
          <div className="flex flex-auto w-full md:w-[40%]">
            <img
              loading="lazy"
              src={app2}
              className="w-full h-auto aspect-w-16 aspect-h-10"
              style={{ borderRadius: "5%", boxShadow: "gray 3px 10px 10px" }}
              alt="Digital Marketing"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-[65vw]">
        <div className="flex flex-col md:flex-row gap-20 -mx-12 md:-mx-36">
          <div className="flex w-full md:w-1/2">
            <img
              loading="lazy"
              src={approach}
              className="w-full h-auto rounded-lg shadow-lg"
              alt="Our Approach"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <div className="text-justify mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Our Approach</h1>
              <p className="mt-4 text-gray-600">
                We believe that effective digital marketing is about more than
                just tactics - it's about developing a comprehensive strategy
                that aligns with your business objectives and resonates with
                your target audience. Our approach begins with a deep
                understanding of your industry, competitors, and target market,
                allowing us to craft tailored digital marketing solutions that
                deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}
