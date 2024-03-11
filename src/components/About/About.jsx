import React from 'react';
import './About.css'; // Import Tailwind styles

import about from '../../assets/about.jpg'
const About = () => {
    return (
        <section className="about-section bg-cover bg-center" style={{ backgroundImage: `url(${about})`}}>
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
    );
};

export default About;
