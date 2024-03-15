import React, { useState, useEffect } from 'react';
import c1 from '../../assets/AppDev.jpg'
import c2 from '../../assets/webDesign.jpg'
import c3 from '../../assets/webDevelopment.jpg'
import c4 from '../../assets/digitalMarkt.webp'
import c5 from '../../assets/brandDesign.jpg'
import c6 from '../../assets/socialMedia.jpg'
import './Services.css'
import { Carousel } from 'flowbite-react';
import ImageCardContainer from './Carousel/ImageCardContainer';
import { Link } from 'react-router-dom';
import app from '../../assets/serviceBg2.jpg'



// import image from '../../assets/image1.jpg'


const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(true);

  const images = [
   c1,c2,c3,c4,c5,c6
  ];
  // const images = [
  //   'https://via.placeholder.com/300x200?text=Image+1',
  //   'https://via.placeholder.com/300x200?text=Image+2',
  //   'https://via.placeholder.com/300x200?text=Image+3',
  //   'https://via.placeholder.com/300x200?text=Image+4',
  //   'https://via.placeholder.com/300x200?text=Image+5',
  //   'https://via.placeholder.com/300x200?text=Image+6'
  // ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
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

    <div className='Services'> 
    {/* <section className=" service-section bg-cover bg-center" >
            <div className="container mx-auto px-4 py-20 md:py-40">
                <div className="serviceText flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl font-bold text-black md:text-5xl">Services We Provide</h1>
                    <p className="text-xl text-gray-800 md:text-2xl">Helping businesses thrive with digital and tech solutions.</p>
                    <ul className="flex flex-wrap justify-center items-center gap-4">
                        <li className="text-black hover:text-white">App Development</li>
                        <li className="text-gray-300 hover:text-white">Website Design & Development</li>
                        <li className="text-gray-300 hover:text-white">SEO</li>
                                            </ul>
                </div>
            </div>
        </section> */}

        <div className="BgDiv relative flex flex-col items-center self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full" 
        style={{marginTop: '0.2px', height: '60vh'}}>
        <img
          loading="lazy"
          src={app}
          className="AppBg object-cover absolute inset-0 size-full"
          style={{opacity: ''}}          
        />
        <div className="relative -mt-4 text-3xl font-extrabold max-md:mr-2.5 max-md:max-w-full" style={{marginTop: '5%'}}>
        <p className="text-xl text-gray-800 md:text-2xl">Helping businesses thrive with digital and tech solutions.</p>        </div>
        <div className="relative text-sm mt-2 text-neutral-600 max-w-[90vw] max-md:text-base">
        <p className='text-2xl text-white'>  We are a full service technology and digital solutions company with over 20 years of experience in industry.</p>
        </div>
        <div className="relative justify-center mt-4 space-x-2">
          <button className="px-4 py-1.5 text-xs text-white bg-zinc-900 rounded-sm">Start a project together</button>
          <button className="px-2 py-1.5 text-xs bg-white border border-zinc-900 rounded-sm">Read More</button>
        </div>
      </div>

        <div>
        <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Overview</h2>
          <p className="mt-2 leading-8 text-2xl font-extrabold text-gray-900 sm:text-3xl">
            With today’s fast-changing IT landscape, you must quickly build new applications to meet consumer demands, reduce tech debt, support legacy systems, and adopt new technologies – quite a balancing act.
          </p>
        </div>
        <div className="mt-10">
          <p className="text-lg leading-8 text-gray-700">
          
            We combine technical expertise, domain knowledge and practical know-how to support your application development and integration requirements, with a clear focus on scalability, extensibility, reliability and most importantly driving meaningful business outcomes.
          </p>
        </div>
      </div>
    </div>
        </div>

        {/* <h4 className="text-2xl sm:text-4xl md:text-2xl lg:text-2xl xl:text-3xl text-start font-bold text-orange-500">Services We Offer</h4> */}


        <div className="carosuelBox object-cover w-full h- h-56 sm:h-64 xl:h-80 2xl:h-96">
        
  <Carousel className="carosuel w-full h-full" >
    <img src={c1} alt="..." className="object-contain w-full h-full" />
    <img src={c2} alt="..." className="object-contain w-full h-full" />
    <img src={c3} alt="..." className="object-contain w-full h-full" />
    <img src={c4} alt="..." className="object-contain w-full h-full" />
    <img src={c5} alt="..." className="object-contain w-full h-full" />
    <img src={c6} alt="..." className="object-contain w-full h-full" />
  </Carousel>
</div>

<ImageCardContainer/>

  


    </div>

    
    
    </>

  )
}

export default Services