// server.js (or wherever your server code resides)

// import { express } from 'express';
// import { bodyParser } from 'body-parser';
// import { nodemailer } from 'nodemailer';

const express = require('express');
const bodyParser = require('body-parser');
const  nodemailer= require('nodemailer');

const app = express();
const port = 3001; // Change this to your desired port

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle form submissions
app.post('/api/submitForm', (req, res) => {
  const { name, email, resume } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'akshitchowdhury@gmail.com', // Your email address
      pass: 'DevAshura666' // Your email password or app-specific password
    }
  });

  // Email message options
  const mailOptions = {
    from: 'raikamiryu@gmail.com', // Sender's email address
    to: 'akshitchowdhury@gmail.com', // Recipient's email address
    subject: 'New job application',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Resume: see attachment</p>
    `,
    attachments: [
      {
        filename: 'resume.pdf', // Change the filename as needed
        content: resume, // Assuming the resume is passed as file content
      }
    ]
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
