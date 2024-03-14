import React from 'react';
import c1 from '../../../assets/AppDev.jpg';
import c2 from '../../../assets/webDesign.jpg';
import c3 from '../../../assets/webDevelopment.jpg';
import c4 from '../../../assets/digitalMarkt.webp';
import c5 from '../../../assets/brandDesign.jpg';
import c6 from '../../../assets/socialMedia.jpg';
import './ImageCardContainer.css'

const ImageCard = ({ imageUrl, text }) => {
  return (
    <div className="Icard relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={imageUrl}
        alt="Card"
        className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 bg-black bg-opacity-50">
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

const ImageCardContainer = () => {
  const cards = [
    {
      imageUrl: c1,
      text: 'Image 1',
    },
    {
      imageUrl: c2,
      text: 'Image 2',
    },
    {
      imageUrl: c3,
      text: 'Image 3',
    },
    {
      imageUrl: c4,
      text: 'Image 4',
    },
    {
      imageUrl: c5,
      text: 'Image 5',
    },
    {
      imageUrl: c6,
      text: 'Image 6',
    },
  ];

  return (
    <div className="Icontainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <ImageCard key={index} imageUrl={card.imageUrl} text={card.text} />
      ))}
    </div>
  );
};

export default ImageCardContainer;
