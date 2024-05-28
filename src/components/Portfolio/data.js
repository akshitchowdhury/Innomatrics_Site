import p1 from '../../assets/portfolio/infinity.jpg';
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

  
  const imageCardsData = [
    {
      image: p1,
      text: 'Inifinty Travles',
      
      link: "https://infinitytravelsblr.com/"
    },
    {
      image: p2,
      text: 'Chan Construcn',
       link: "https://chanconstructions.com/"
      
    },
    {
      image: p3,
      text: 'D studio Weddings',
 
      link: "https://dstudioweddings.com/"
    },
    {
      image: p4,
      text: 'Gold Key',
       link: "http://goldenkeysolutions.co.in/"
      
    },
    {
      image: p5,
      text: 'Indian Dream Consultancy',
       link: "https://indiandreamsconsultancy.in/"
      
    },
    {
      image: p6,
      text: 'MRI Towing',
       link: "https://mritowingservice.com/"
    },
    {
      image: p7,
      text: 'Osprezt technologies',
      
      link: "https://osprzet.in/"
    },
    {
      image: p8,
      text: 'Royal King Facility',
      
      link: "https://royalkingfacility.co.in/"
    },
    {
      image: p9,
      text: 'SKB Tours and Travels',
       link: "https://skbtoursandtravels.com/"
    },
    {
      image: p10,
      text: 'Sri Susamskrutha Sai Charitable Trust',
    link: "https://srisusamskrutha.org/"
    },
    {
      image: p11,
      text: 'Tirupathi Balaji Tours',
      link: "https://tirupatibalajitours.in/"
    },
    {
      image: p12,
      text: 'V.K Lights',
       link: "https://vklights.in/"
    },]

    export default imageCardsData;

//     <div className="container mx-auto py-16 px-4 my-14">
//       <p className="text-amber-600 font-semibold text-2xl md:text-5xl">
//         Industries we have collaborated with
//       </p>
//       <hr className="text-sky-600 w-[70%] my-7" />

//       {/* Large and Medium Screens Layout */}
//       <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
//   <div className="w-full lg:w-1/3">
//     <ul className="text-lg md:text-xl text-sky-600 space-y-4">
//       {data.map((item, index) => (
//         <li
//           key={index}
//           className="cursor-pointer hover:text-orange-500 transition ease-in-out duration-200 hover:scale-105"
//           onClick={() => handleMouseEnter(index)}
//         >
//           {item.text}
//         </li>
//       ))}
//     </ul>
//   </div>

//   <div className="w-full lg:w-2/3 flex justify-center lg:justify-start">
//     <img
//       src={hoveredItem !== null ? data[hoveredItem].image : indus1}
//       alt="Industry"
//       className="w-[120%] h-[400px]  rounded-md shadow-md"
//     />
//   </div>
// </div>


//       {/* Small Screens Accordion */}
//       <div className="lg:hidden">
//         {data.map((item, index) => (
//           <div key={index} className="mb-4">
//             <button
//               className="w-full text-left text-lg md:text-xl text-sky-700 font-semibold
//                bg-gray-800 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               onClick={() => handleAccordionToggle(index)}
//             >
//               {item.text}
//             </button>
//             <div
//               className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                 openIndex === index ? "max-h-screen" : "max-h-0"
//               }`}
//             >
//               {openIndex === index && (
//                 <div className="mt-2 p-4 bg-gray-700 rounded-md">
//                   <h2 className="text-2xl font-bold text-orange-500 mb-2">
//                     {item.title}
//                   </h2>
//                   <p className="text-white mb-4">{item.desc}</p>
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-auto rounded-md shadow-md mb-4"
//                   />
//                   <a href= {item.link}>
//                     <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300">
//                       Learn More
//                     </button>
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>