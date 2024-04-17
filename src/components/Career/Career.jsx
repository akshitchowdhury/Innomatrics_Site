
import React, { forwardRef, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Caree.css";
import careerImage from "../../assets/career.jpg"; // Import your career image

const CareerComponent = forwardRef((props, ref) => {
  const emailRef = useRef();
  const nameRef = useRef();
  // const messageRef = useRef();
  const experienceRef = useRef();
  const phoneRef = useRef();
  
  const [loading, setLoading] = useState(false);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle file upload (e.g., send file to backend)
    console.log("Uploaded file:", file);
  };


  useEffect(() => {
    emailjs.init("yYVBr5BddZiFletl9");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_hz6vh9l";
    const templateId = "template_15xt8ef";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        experience: experienceRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
      });
      alert(
        "Email successfully sent. Please check your inbox.\n\nName: " +
          nameRef.current.value +
          "\nEmail: " +
          emailRef.current.value +
          "\nExperience: " +
          experienceRef.current.value +
          "\nPhone: " +
          phoneRef.current.value
      );
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div ref={ref} className="career-container ">
        <div className="career-content">
          <div className="career-image">
            <img src={careerImage} alt="Career" />
          </div>
          <div className="career-form border rounded-lg p-6 bg-white shadow-md">
  <h2 className="career-title">Apply for a Career</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name" className="form-label">Name</label>
      <input
        type="text"
        ref={nameRef}
        id="name"
        name="name"
        className="form-input"
        placeholder="Enter your name"
      />
    </div>
    <div className="form-group">
      <label htmlFor="email" className="form-label">Email</label>
      <input
        type="email"
        ref={emailRef}
        id="email"
        name="email"
        className="form-input"
        placeholder="Enter your email"
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone" className="form-label">Phone</label>
      <input
        type="tel"
        ref={phoneRef}
        id="phone"
        name="phone"
        className="form-input"
        placeholder="Enter your phone no"
      />
    </div>
    <div className="form-group">
      <label htmlFor="experience" className="form-label">Years of Experience</label>
      <input
        type="number"
        ref={experienceRef}
        id="experience"
        name="experience"
        className="form-input"
        placeholder="Years of experience"
      />
    </div>
    <div className="form-group">
      <label htmlFor="resume" className="form-label">Upload Resume (PDF)</label>
      <input
        type="file"
        id="resume"
        name="resume"
        accept=".pdf"
        onChange={handleFileUpload}
        className="form-input"
      />
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
