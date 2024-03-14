// import React, { useState } from 'react';
// import i1 from '../../assets/AppDev.jpg'
// const CareerComponent = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     resume: null
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       resume: e.target.files[0]
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     formDataToSend.append('name', formData.name);
//     formDataToSend.append('email', formData.email);
//     formDataToSend.append('resume', formData.resume);

//     try {
//       const response = await fetch('/api/submitForm', {
//         method: 'POST',
//         body: formDataToSend
//       });

//       if (response.ok) {
//         alert('Form submitted successfully!');
//         setFormData({
//           name: '',
//           email: '',
//           resume: null
//         });
//       } else {
//         alert('Failed to submit form. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('Failed to submit form. Please try again.');
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
//       <div className="lg:w-1/2 lg:mr-8">
//         <img src={i1} alt="Innomatrics" className="w-full h-auto rounded-lg" />
//       </div>
//       <div className="lg:w-1/2 mt-8 lg:mt-0">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
//         <p className="text-lg text-gray-700 mb-4">Innomatrics is a leading software consulting company committed to delivering cutting-edge solutions to our clients worldwide. We are looking for passionate individuals to join our team and drive innovation.</p>
        
//         <form className="mb-4" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//             <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//             <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">Resume</label>
//             <input type="file" id="resume" name="resume" onChange={handleFileChange} className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
//           </div>
//           <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CareerComponent;


import React, { forwardRef, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Caree.css';
import careerImage from '../../assets/career.jpg'; // Import your career image

const CareerComponent = forwardRef((props, ref) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("iI4KONZqTCCU8bCTw");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_gr4bljk";
    const templateId = "template_tv63f2y";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        message: messageRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value
      });
      alert("Email successfully sent. Please check your inbox.\n\nName: " + nameRef.current.value + "\nEmail: " + emailRef.current.value + "\nMessage: " + messageRef.current.value + "\nPhone: " + phoneRef.current.value);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div ref={ref} className='career-container'>
        <div className="career-content">
          <div className="career-image">
            <img src={careerImage} alt="Career" />
          </div>
          <div className="career-form">
            <h2 className="career-title">Apply for a Career</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" ref={nameRef} id="name" name="name" className="form-input" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" ref={emailRef} id="email" name="email" className="form-input" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" ref={phoneRef} id="phone" name="phone" className="form-input" placeholder="Enter your phone no" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" ref={messageRef} name="message" rows="4" className="form-input" placeholder="Enter your message"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="experience" className="form-label">Years of Experience</label>
                <input type="number" id="experience" name="experience" className="form-input" placeholder="Years of experience" />
              </div>
              <button type="submit" className="form-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
});

export default CareerComponent;
