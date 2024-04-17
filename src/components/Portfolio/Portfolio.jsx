import React, { useState } from 'react';

import v1 from '../../assets/video/v1.mp4';
import v2 from '../../assets/video/v2.mp4';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/portfolio/chan.jpg';
import p3 from '../../assets/portfolio/dstudio.jpg';
import p4 from '../../assets/portfolio/goldKey.jpg';
import p5 from '../../assets/portfolio/indianDreams.jpg';
import p6 from '../../assets/portfolio/mriTowing.jpg';
import p7 from '../../assets/portfolio/osprzet.jpg';
import p8 from '../../assets/portfolio/royalKing.jpg';
import p9 from '../../assets/portfolio/skb.jpg';
import p10 from '../../assets/portfolio/srisusa.jpg';
import p11 from '../../assets/portfolio/tirupatiTours.jpg';
import p12 from '../../assets/portfolio/vkLights.jpg';

import './Portfolio.css'
import VerticalImageCarousel from './Vertical Iamge Carousel/VerticalImageCarousle';

const Portfolio = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCardClick = (videoUrl) => {
    setVideoUrl(videoUrl);
    setIsPlaying(!isPlaying);
  };

  const handleCardHover = (videoUrl) => {
    setVideoUrl(videoUrl);
    setIsPlaying(true);
  };

  const imageCardsData = [
    {
      image: p1,
      text: 'Card 1',
      videoUrl: v1,
    },
    {
      image: p2,
      text: 'Card 2',
      videoUrl: v2,
    },
    {
      image: p3,
      text: 'Card 2',
      videoUrl: v2,
    },
    {
      image: p4,
      text: 'Card 2',
      videoUrl: v2,
    },
    {
      image: p5,
      text: 'Card 2',
      videoUrl: v2,
    },
    {
      image: p6,
      text: 'Card 2',
      videoUrl: v2,
    },
    {
      image: p7,
      text: 'Card 2',
      videoUrl: v2,
    },
    {
      image: p8,
      text: 'Card 2',
      videoUrl: v2,
    },
    {
      image: p9,
      text: 'Card 2',
      videoUrl: v2,
    },
    {
      image: p10,
      text: 'Card 2',
      videoUrl: v2,
    },
    {
      image: p11,
      text: 'Card 2',
      videoUrl: v2,
    },
    {
      image: p12,
      text: 'Card 2',
      videoUrl: v2,
    },
    // Add more card data as needed
  ];

  return (
    <>
   <div className='bg-gray-200 shadow-lg'>
   <div className="container  mx-auto flex flex-col md:flex-row items-center justify-center py-8">
      <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Our Portfolio</h2>
        <p className="text-lg md:text-xl mb-4">
          At Innomatrics Technologies, we take pride in delivering top-notch software consultancy services to businesses of all sizes. Our team of experienced professionals specializes in a wide range of technologies and domains, ensuring that we can cater to your specific needs with precision and expertise.
        </p>
        <p className="text-lg md:text-xl mb-4">
          With a proven track record of successful projects and satisfied clients, we offer comprehensive consultancy services that cover the entire software development lifecycle. From initial planning and strategy to development, testing, deployment, and ongoing support, we're here to guide you every step of the way.
        </p>
        <p className="text-lg md:text-xl mb-4">
          Our portfolio showcases a diverse array of projects we've undertaken, each highlighting our commitment to excellence, innovation, and customer satisfaction. Whether you're looking to streamline your business processes, develop a custom software solution, or harness the power of emerging technologies, we have the expertise and dedication to turn your vision into reality.
        </p>
       
      </div>
      {/* <div className="md:w-1/2">
        <img src={p1} alt="Consultancy Service" className="w-full h-auto rounded-lg shadow-md" />
      </div> */}
    
      <VerticalImageCarousel/>
    
    </div>

    </div>

    <div className="block2">
    <div className="mb-8 flex justify-center">
        <video
          src={videoUrl}
          controls={isPlaying}
          autoPlay={isPlaying}
          loop
          width="600"
          height="400"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageCardsData.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(card.videoUrl)}
              onMouseEnter={() => handleCardHover(card.videoUrl)}
              onMouseLeave={() => {setVideoUrl(''); ;}}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img src={card.image} alt={card.text} className="w-full h-auto" />
              <div className="p-4">
                <p className="text-lg font-semibold mb-2">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
    </div>


    </>
    
  );
};

export default Portfolio;
