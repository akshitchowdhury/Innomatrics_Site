import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

import c1 from '../../assets/portfolioLogo/MRItow.jpg'
import c2 from '../../assets/portfolioLogo/RoyalKing.jpg'
import c3 from '../../assets/portfolioLogo/chanconst.jpg'
import c4 from '../../assets/portfolioLogo/dstudio.jpg'
import c5 from '../../assets/portfolioLogo/goldkey.jpg'
import c6 from '../../assets/portfolioLogo/infinitytravels.jpg'
import c7 from '../../assets/portfolioLogo/ngo.jpg'
import c8 from '../../assets/portfolioLogo/osprezt.jpg'
import c9 from '../../assets/portfolioLogo/skb.jpg'
import c10 from '../../assets/portfolioLogo/thriupathiTours.jpg'
import c11 from '../../assets/portfolioLogo/vklights.jpg'

import { Carousel } from 'flowbite-react';
import ImageCardContainer from '../Services/Carousel/ImageCardContainer';
import OurVision from './Our Vision/OurVision';
import OurMission from './Our Mission/OurMission';
import ClientsCard from '../ClientsLogo/ClientsCard';
import ClientsCarousel from '../ClientsLogo/ClientsCarousel';
import Join from './JoinTeam/Join';
import CountRise from './CountRise/CountRise';


const Home = () => {
  
  const clientLogos = [
    {
      image: c1
    },
    {
      image: c2
    },
    {
      image: c3
    },
    {
      image: c4
    },
    {
      image: c5
    },
    {
      image: c6
    },
    {
      image: c7
    },
    {
      image: c8
    },
    {
      image: c9
    },
    {
      image: c10
    },
    {
      image: c11
    },
  ]
  
    const[isAnimating, setIsAnimating] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(prevState => !prevState); // Toggle animation state
        }, 1000); // Adjust the delay according to your preference (in milliseconds)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this effect runs only once on mount
    return (<>    
    


    
    <div className="home flex flex-col">
      
        <div className="p-20 flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-xs leading-4 max-md:mt-10 max-md:max-w-full">
              <div className="text-7xl font-semibold
               text-white leading-[79px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Innomatrics Technologies
              </div>
              <div className="mt-3 text-sm text-sky-500 flex items-center mx-11">
  <hr className="w-1/12"/>
  <span className="mx-2 md:mx-4">Innovate Inspire Integrate</span>
  <hr className="w-1/12"/>
</div>

              <Link to="/contact">
            {" "}
            <button
              type="button"
              className="text-white 
              px-6  mt-6
              bg-blue-700 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium  text-sm  py-4
              text-center dark:bg-blue-600 dark:focus:ring-blue-800
              hover:bg-white hover:text-black hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out
              mx-32"
            >
              Get a Quote
            </button>
          </Link> 
            </div>
          </div>
         




      </div>
      <div className='p-8 my-28'>

      <h2 className='text-4xl text-white text-center'>Our Services</h2>
      
      <ImageCardContainer/>
      </div>


      <div style={{ padding: '4%' }} className='flex flex-col sm:flex-row'>
  <div style={{ flex: 1,
  marginRight: '2%' }}>
    <OurVision />
  </div>
  <div style={{ flex: 1 }}>
    <OurMission />
  </div>
</div>

<Join/>

<CountRise/>
      <div className="flex flex-col items-center px-20 mt-7 w-full max-md:px-5 max-md:max-w-full">
        <div className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Clients
        </div>
        <div className="mt-1.5 text-lg leading-4 text-center text-zinc-300 max-md:max-w-full">
          We have been working with some of the best players in the industry
        </div>
        <div className="flex gap-5 justify-between py-4 mt-3 w-full max-w-[802px] max-md:flex-wrap max-md:max-w-full">
          <ClientsCarousel clientLogos ={clientLogos}/>
        </div>
      </div>
      {/* <div className="justify-between px-20 mt-3 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-3 py-4 my-auto w-full text-center bg-white rounded-md shadow-sm max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e03f53d0bc39297e541c9fa2fec72da953b84cee5b9cf0b7bf96fb64e80a876b?"
                className="self-center aspect-[1.15] w-[45px]"
              />
              <div className="mt-3 text-xl font-bold leading-6 text-indigo-900">
                Membership Organisations
              </div>
              <div className="mt-1.5 text-xs leading-4 text-sky-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-3 py-4 w-full text-center bg-white rounded-md shadow-sm max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb79993b018bc57011ebdcadd5b3325addb2d14a2823aac7c3d17eb53211bab1?"
                className="self-center aspect-[1.15] w-[45px]"
              />
              <div className="mt-3 text-xl font-bold leading-6 text-indigo-900">
                National Associations
              </div>
              <div className="mt-1.5 text-xs leading-4 text-sky-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-3 py-4 my-auto w-full text-center bg-white rounded-md shadow-sm max-md:mt-10">
              <div className="flex flex-col px-3.5 text-xl font-bold leading-6 text-indigo-900">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/362a689ece4375ab1b64474220275e3757a312653c651e5a4f65df3e3e333760?"
                  className="self-center aspect-[1.18] w-[46px]"
                />
                <div className="mt-3">Clubs And Groups</div>
              </div>
              <div className="mt-1.5 text-xs leading-4 text-sky-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
        </div>
      </div> */}
    
      {/* <div className="carosuelBox object-cover w-full h- h-56 sm:h-64 xl:h-80 2xl:h-96">
        
        <Carousel className="carosuel w-full h-full" >
          <img src={c1} alt="..." className="object-contain w-full h-full" />
          <img src={c2} alt="..." className="object-contain w-full h-full" />
          <img src={c3} alt="..." className="object-contain w-full h-full" />
          <img src={c4} alt="..." className="object-contain w-full h-full" />
          <img src={c5} alt="..." className="object-contain w-full h-full" />
          <img src={c6} alt="..." className="object-contain w-full h-full" />
        </Carousel>
      </div> */}
      
    
    </div>




{/* 
    <div className="flex flex-col">
      <div className="px-20 py-16 w-full bg-slate-100 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto leading-[150%] max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl font-semibold text-black leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Lessons and insights{" "}
                <span className="text-red-500">from 8 years</span>
              </div>
              <div className="mt-3 text-xs text-neutral-500 max-md:max-w-full">
                Where to grow your business as a photographer: site or social
                media?
              </div>
              
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a5ddad7a1257fb8f0a9b2bedccdff29fcd3380d0a0c8709ead4d217ca914954?"
              className="grow w-full aspect-[0.96] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-20 mt-7 w-full max-md:px-5 max-md:max-w-full">
        <div className="text-2xl font-semibold leading-8 text-center text-neutral-600 max-md:max-w-full">
          Our Clients
        </div>
        <div className="mt-1.5 text-xs leading-4 text-center text-neutral-500 max-md:max-w-full">
          We have been working with some Fortune 500+ clients
        </div>
        <div className="flex gap-5 justify-between py-4 mt-3 w-full max-w-[802px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0419e94add036cfac98607a2c4f7dd41bc704def16cd3c2acce7a21e48065abd?"
            className="shrink-0 aspect-square w-[34px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/833bf53088f60b4a7e5cb1972ad0a0fab9947f27f2ffbdb956bd85cd3a184555?"
            className="shrink-0 aspect-square w-[34px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/449819946fd21929e0c4bfd73c0faac2825b366faa13cdf43545be1464d50015?"
            className="shrink-0 aspect-square w-[34px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57608cd73bf9484625e4b9cacd34b8b80f9a3d58ab72323b3edac8ca67d5b9b0?"
            className="shrink-0 aspect-square w-[34px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b74aca6a50a6d3d02f65d98a4b6f819f9998bacbfed468c6a6baa0f910811?"
            className="shrink-0 aspect-[0.97] w-[33px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3e4069d66ed70981d89907670dd6649d7da30d3d4d29010a013bef5bab5e54d?"
            className="shrink-0 aspect-[0.97] w-[33px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/948a9019c168cce894a82540f56a51412908c6e3688ed2e6da122ed618b2737c?"
            className="shrink-0 aspect-[0.97] w-[33px]"
          />
        </div>
      </div>
      <div className="self-center mt-7 text-2xl font-semibold leading-8 text-center text-neutral-600 w-[378px]">
        Manage your entire community in a single system
      </div>
      <div className="mt-1.5 w-full text-xs leading-4 text-center text-neutral-500 max-md:max-w-full">
        Who is Nextcent suitable for?
      </div>
      <div className="justify-between px-20 mt-3 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-3 py-4 my-auto w-full text-center bg-white rounded-md shadow-sm max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c5754b20604085aeee95e0907fb6ac577c951806526449e522bb4b1637d6137?"
                className="self-center aspect-[1.15] w-[45px]"
              />
              <div className="mt-3 text-xl font-bold leading-6 text-neutral-600">
                Membership Organisations
              </div>
              <div className="mt-1.5 text-xs leading-4 text-neutral-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-3 py-4 w-full text-center bg-white rounded-md shadow-sm max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b69f4f4ca7c3f3b9ecd64eae339d1d38d2588d50e66aef96ffef327b1ebb0639?"
                className="self-center aspect-[1.15] w-[45px]"
              />
              <div className="mt-3 text-xl font-bold leading-6 text-neutral-600">
                National Associations
              </div>
              <div className="mt-1.5 text-xs leading-4 text-neutral-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-3 py-4 my-auto w-full text-center bg-white rounded-md shadow-sm max-md:mt-10">
              <div className="flex flex-col px-3.5 text-xl font-bold leading-6 text-neutral-600">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5b26dead4d317a5ea57e15b65e169449ba7e0654966729f82e867457b1fdcb7?"
                  className="self-center aspect-[1.18] w-[46px]"
                />
                <div className="mt-3">Clubs And Groups</div>
              </div>
              <div className="mt-1.5 text-xs leading-4 text-neutral-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}


    </>

  )
}

export default Home