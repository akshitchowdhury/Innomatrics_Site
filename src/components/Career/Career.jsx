import React from 'react';
import i1 from '../../assets/webDevelopment.jpg'
import './Caree.css'
const Career = () => {
  return (
    <div className="career flex flex-col lg:flex-row items-center justify-center lg:justify-start">
      <div className="lg:w-1/2 lg:mr-8">
        <img src={i1} alt="Innomatrics" className="w-full h-auto rounded-lg" />
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
        <p className="text-lg text-gray-700 mb-4">Innomatrics is a leading software consulting company committed to delivering cutting-edge solutions to our clients worldwide. We are looking for passionate individuals to join our team and drive innovation.</p>
        
        <form className="mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">Resume</label>
            <input type="file" id="resume" name="resume" className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Career;
