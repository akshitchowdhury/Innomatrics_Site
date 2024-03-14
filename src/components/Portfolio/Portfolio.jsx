import React, { useState } from 'react';

import v1 from '../../assets/video/v1.mp4';
import v2 from '../../assets/video/v2.mp4';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.jpg';
import './Portfolio.css'
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
      image: p2,
      text: 'Card 2',
      videoUrl: v2,
    },
    {
      image: p2,
      text: 'Card 2',
      videoUrl: v2,
    },
    // Add more card data as needed
  ];

  return (
    <>
    {/* <div className="container ">
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
      <div className="flex flex-wrap justify-center">
        {imageCardsData.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(card.videoUrl)}
            onMouseEnter={() => handleCardHover(card.videoUrl)}
            onMouseLeave={() => {setVideoUrl(''); }}
            className="flex flex-col items-center justify-center w-64 h-64 md:w-72 md:h-72 bg-gray-200 rounded-lg shadow-md mx-4 mb-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img src={card.image} alt={card.text} className="w-full h-auto rounded-t-lg" />
            <p className="text-lg font-semibold mt-2">{card.text}</p>
          </div>
        ))}
      </div>
    </div> */}


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
