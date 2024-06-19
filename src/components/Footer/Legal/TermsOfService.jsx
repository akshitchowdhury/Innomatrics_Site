import React, { forwardRef } from 'react';

const TermsOfService = forwardRef((props,ref) => {
  return (
    <div className="container mx-auto px-4 py-8" ref={ref}>
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-gray-700 mb-4">
        Welcome to Innomatrics Technologies! These Terms of Service ("Terms") govern your access to and use of our website, services, and products provided by Innomatrics Technologies ("Innomatrics", "we", "our", or "us"). By accessing or using any part of our services, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, then you may not access our services.
      </p>
      <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="text-gray-700 mb-4">
        By accessing or using our services, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these Terms, you are prohibited from using or accessing our services.
      </p>
      <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
      <p className="text-gray-700 mb-4">
        You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information and passwords associated with your use of our services.
      </p>
      <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
      <p className="text-gray-700 mb-4">
        All content included in or made available through our services, such as text, graphics, logos, images, and software, is the property of Innomatrics Technologies or its licensors and is protected by copyright, trademark, and other intellectual property laws.
      </p>
      <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
      <p className="text-gray-700 mb-4">
        You retain ownership of any content you submit, post, or display on or through our services ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such User Content.
      </p>
      <h2 className="text-2xl font-semibold mb-4">5. Prohibited Activities</h2>
      <p className="text-gray-700 mb-4">
        You agree not to engage in any of the following prohibited activities: (a) use our services for any illegal purpose; (b) transmit any viruses, worms, or other malicious software; (c) interfere with or disrupt our services or servers; (d) attempt to gain unauthorized access to our services or any accounts, computer systems, or networks connected to our services; (e) collect or harvest any personally identifiable information from our services; (f) impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity.
      </p>
      <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
      <p className="text-gray-700 mb-4">
        We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
      </p>
      <h2 className="text-2xl font-semibold mb-4">7. Disclaimer</h2>
      <p className="text-gray-700 mb-4">
        Our services are provided on an "as is" and "as available" basis. We do not warrant that our services will be uninterrupted, secure, or error-free.
      </p>
      <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        In no event shall Innomatrics Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
      </p>
      {/* <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
      <p className="text-gray-700 mb-4">
        These Terms shall be governed by and construed in accordance with the laws of [insert applicable jurisdiction], without regard to its conflict of law provisions.
      </p> */}
      <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
      </p>
      <p className="text-gray-700 mb-4">
        If you have any questions about these Terms, please contact us at hello@innomatricstech.com
      </p>
      <p className="text-gray-700 mb-4">Last updated: 19-06-2024</p>
    </div>
  );
})

export default TermsOfService;
