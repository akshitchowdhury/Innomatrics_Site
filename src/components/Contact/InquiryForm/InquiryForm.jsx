import React, { useState } from 'react';
import { Card, Form, Input, Button } from 'antd'; // Assuming you're using Ant Design components
import MapLeaflet from '../MapLeaflet/MapLeaflet'; // Import your MapLeaflet component
import './InquiryForm.css'
const InquiryForm = () => { 
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input className='enter-name' />
      </Form.Item>

      <Form.Item
      
        label="Email Address"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email address!' },
        ]}
      >
        <Input className='enter-email' />
      </Form.Item>

      <Form.Item
      
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please input your message!' }]}
      >
        <Input.TextArea className='enter-message' />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          { required: true, message: 'Please input your phone number!' },
          { pattern: /^\d{10}$/, message: 'Please enter a valid phone number!' },
        ]}
      >
        <Input className='enter-phone'/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          <h2 className='text-center text-black text-l mb-6'>Submit</h2>
        </Button>
      </Form.Item>
    </Form>
  );
};

const InquiryAndMapComponent = () => {
  
  return (
    <div className='contactBlock display-flex flex-col md:flex-row sm:flex-col ' style={{ display: 'flex' }}>
      <Card className='bg-inherit' style={{ flex: 1, marginRight: '1rem', maxHeight: '500px',
      border: 'none'}}>
       {/* Adjust the max-height as per your requirement */}
        <h2 className='text-left text-gray-700 font-semibold
        font-sans
         text-6xl mb-6'>We'd love to hear from you!</h2>
        
      </Card>
     
      <Card
       style={{marginBottom: '5%', flex: 1, marginRight: '1rem', maxHeight: '500px' }}> {/* Adjust the max-height as per your requirement */}
        <h2 className='text-center text-black text-xl mb-6'>Inquiry Form</h2>
        <InquiryForm />
      </Card>
     
    </div>
  );
};

export default InquiryAndMapComponent;
