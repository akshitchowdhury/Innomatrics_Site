import React from 'react';
import './About.css'; // Import Tailwind styles
import aboutMe from '../../assets/aboutMe.jpeg'
import about from '../../assets/about.jpg'
const About = () => {
    return (
        <>
        <section className=" about-section bg-cover bg-center" >
            <div className="container mx-auto px-4 py-20 md:py-40">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl font-bold text-white md:text-5xl">Your Name - Tech Consultant</h1>
                    <p className="text-xl text-gray-300 md:text-2xl">Helping businesses thrive with digital and tech solutions.</p>
                    <ul className="flex flex-wrap justify-center items-center gap-4">
                        <li className="text-gray-300 hover:text-white">App Development</li>
                        <li className="text-gray-300 hover:text-white">Website Design & Development</li>
                        <li className="text-gray-300 hover:text-white">SEO</li>
                        {/* Add more services as needed */}
                    </ul>
                </div>
            </div>
        </section>
        <div className=" flex flex-col lg:flex-row">
  
  <div className="aboutText w-full lg:w-1/2  bg-gray-100 rounded-lg shadow-md">
    <p className="text-xl text-gray-800 font-semibold mb-4">
      Welcome to Innomatrics Technologies, where innovation meets excellence in the realm of digital solutions.
    </p>
    <p className="text-base text-gray-700 mb-4">
      As a tech-driven consultancy company, we specialize in empowering businesses to thrive in the ever-evolving online landscape. With a comprehensive suite of services including website design, web app development, mobile app development, SEO, and digital marketing, we are committed to catalyzing your growth and maximizing your online presence.
    </p>
    <p className="text-base text-gray-700 mb-4">
      At Innomatrics, we understand the unique challenges businesses face in the digital sphere, and we are dedicated to crafting tailored solutions that address your specific needs and objectives. Whether you're a startup looking to establish your online presence or a seasoned enterprise seeking to optimize your digital strategy, our team of experts is here to guide you every step of the way.
    </p>
    <p className="text-base text-gray-700 mb-4">
      Driven by a passion for innovation and a commitment to excellence, we take pride in delivering cutting-edge solutions that not only meet but exceed our clients' expectations. With a focus on collaboration, transparency, and results, we strive to build long-lasting partnerships that drive success and fuel growth.
    </p>
    <p className="text-base text-gray-700">
      Discover the power of digital transformation with Innomatrics Technologies. Let's embark on a journey of innovation together, and unlock the full potential of your business in the digital age.
    </p>
  </div>

  <div className="p-3 aboutMe bg-gray-100 w-full lg:w-1/2 ">
    <img src={aboutMe} alt="aboutMe" className="w-full " />
  </div>
</div>

<div className="text-center py-8 lg:py-12">
  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">ALLIANCES & PARTNERS</h2>
  <p className="text-base lg:text-lg text-gray-700 mb-8">Bringing our clients the best through the power of partnerships</p>
  <p className="text-base lg:text-lg text-gray-700 mb-8">
    Digital transformation is not a plug and play strategy. It requires providing the best technology and innovation the market has to offer.
    <br />
    Infinite understands the importance of bringing this domain and technical expertise to our clients, and has established a robust alliance and partner ecosystem to make it happen. 
    <br />
    We are proud to have developed deep partnerships with some of today’s leading digital technology companies.
  </p>

  <h4 className="text-left text-2xl lg:text-2xl font-bold text-gray-800 mb-4">OUR CLIENTS</h4>

  <div className='clientCard'>


  </div>



</div>







        </>
    );
};

export default About;
