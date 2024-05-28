import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd"; // Assuming you're using Ant Design components
import MapLeaflet from "../MapLeaflet/MapLeaflet"; // Import your MapLeaflet component
import "./InquiryForm.css";
import { FaLocationPin, FaLocationPinLock, FaMapLocation, FaMapLocationDot } from "react-icons/fa6";
const InquiryForm = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="inquiry_form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      className="form-title"
    >
      <Form.Item
        label="Name"
        name="name"
        className=" font-semibold text-gray-700"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input className="enter-name" />
      </Form.Item>

      <Form.Item
        label="Business email Address"
        name="email"
        className=" font-semibold"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email address!" },
        ]}
      >
        <Input className="enter-email" />
      </Form.Item>

      <Form.Item
        label="Message"
        className=" font-semibold"
        name="message"
        rules={[{ required: true, message: "Please input your message!" }]}
      >
        <Input.TextArea className="enter-message" />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        className=" font-semibold"
        name="phone"
        rules={[
          { required: true, message: "Please input your phone number!" },
          {
            pattern: /^\d{10}$/,
            message: "Please enter a valid phone number!",
          },
        ]}
      >
        <Input className="enter-phone" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" className="w-full bg-red-500 h-12" htmlType="submit">
          <h2 className="text-center p-2 text-white font-semibold text-lg mb-6">Submit</h2>
        </Button>
      </Form.Item>
    </Form>
  );
};

const InquiryAndMapComponent = () => {
  return (
    <div
      className="contactBlock display-flex flex-col md:flex-row sm:flex-col "
      style={{ display: "flex" }}
    >
      <Card
        className="bg-black bg-inherit"
        style={{
          flex: 1,
          marginRight: "1rem",
          maxHeight: "500px",
          border: "none",
        }}
      >
        {/* Adjust the max-height as per your requirement */}
        <h2
          className="text-left font-bold text-2xl md:text-4xl my-6"
        >
          We'd love to hear from you!
        </h2>
        <p className="font-medium text-gray-600  text-lg my-4">
          Please let us know what you are looking for and we will get in touch
          with you
        </p>

        <hr className="w-full my-6 " style={{backgroundColor: 'black'}}/>
        
        <div>
      <p className="font-bold text-2xl md:text-4xl my-6 flex items-center">
        <FaLocationPin className="text-orange-500 mr-2" />
        Office Location
      </p>
      <p className="font-medium text-gray-600 text-lg my-4">
        2nd Floor, Akshay Complex, No. 01, 16th Main Rd, near Bharat
        Petroleum, BTM 2nd Stage, Bengaluru, Karnataka 560076
      </p>
    </div>
      </Card>

      <Card
        className="p-10 "
        style={{
          marginBottom: "5%",
          flex: 1,
          marginRight: "1rem",
          maxHeight: "520px",
        }}
      >
        {" "}
        {/* Adjust the max-height as per your requirement */}
        <InquiryForm />
      </Card>
    </div>
  );
};

export default InquiryAndMapComponent;
