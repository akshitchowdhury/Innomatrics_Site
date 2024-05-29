import React, { forwardRef } from "react";

const PrivacyPolicy = forwardRef((props,ref) => {
  return (
    <div className="container mx-auto px-4 py-8" ref={ref}>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        We respect your privacy. This privacy policy and agreement (this
        “Privacy Policy” or “Policy“) describes how we collect, use, and treat
        personal information that you provide to Innomatrics Technoligies.
        (“Innomatrics“, “we“, “our“, or “us“): (i) through our website at{" "}
        <a
          href="https://www.Innomatrics.com"
          className="text-blue-500 hover:underline"
        >
          https://www.Innomatrics.com
        </a>{" "}
        (our “Website” or “Site“); (ii) by contacting us directly by phone,
        email, or other communications channel; or (iii) while otherwise using
        the services and information available via the Website or otherwise
        (collectively, the “Services“) (the Services, together with our Website,
        are referred to as the “Platform“).
      </p>
      <p className="text-gray-700 mb-4">
        Please read this Privacy Policy carefully. Once you consent to this
        Privacy Policy and its terms, it creates legal obligations on you and
        Innomatrics. Our Privacy Policy applies to anyone using our Website or
        otherwise participating in our Services (collectively, “you” and
        “your“).
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Your Consent to this Privacy Policy
      </h2>
      <p className="text-gray-700 mb-4">
        You indicate your consent to this Privacy Policy by using our Website or
        otherwise participating in our Services. We may also request your
        express consent when we collect Personal Information from you. In any
        case, you are acknowledging that you have read and understood this
        Privacy Policy, and agree to be legally bound by it. If you do not agree
        with the terms of this Privacy Policy, then please do not use our
        Platform.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        The Information We Collect
      </h2>
      <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
      <p className="text-gray-700 mb-4">
        We collect certain information that identifies you as an individual and
        may associate other data with such information (collectively, “Personal
        Information“). The Personal Information we collect may include the
        following:
      </p>
      <ul className="list-disc pl-6 mb-4 ">
        <li>
          Your name, phone number, email address, and other contact information;
        </li>
        <li>The agency or organization that you represent and your title;</li>
        <li>Your geolocation information;</li>
        <li>
          Any information or feedback you provide to us through our Platform or
          via social media, email, or phone; and
        </li>
        <li>Your transactions with us.</li>
      </ul>
      <p className="text-gray-700 mb-4">
        If you provide us with any Personal Information relating to another
        individual, you represent that you have the authority to do so and to
        permit us to use the information under this Privacy Policy.
      </p>
      <h3 className="text-xl font-semibold mb-2">Anonymous Information</h3>
      <p className="text-gray-700 mb-4">
        We may also have (i) information that does not identify you or your
        devices, and (ii) de-identified Personal Information that no longer
        identifies you (collectively, “Anonymous Information“). Information that
        meets either of these criteria may include, for example, certain
        demographic information, statistical information (e.g., page views and
        hit counts), and general tracking information. We use Anonymous
        Information for our business operations, such as to improve our
        Platform. Because Anonymous Information does not include Personal
        Information, any Anonymous Information, and our use of it, is not
        subject to this Privacy Policy.
      </p>
      <h3 className="text-xl font-semibold mb-2">
        Treatment of Combined Information
      </h3>
      <p className="text-gray-700 mb-4">
        If we combine Online Activity Information or Anonymous Information with
        Personal Information, then we will treat the resulting combination as
        Personal Information subject to the terms of this Privacy Policy.
        Moreover, we may combine Personal Information that you provide to us
        with other data for our business operations and other purposes specified
        in this Privacy Policy. If the information we combine in this manner
        includes your Personal Information, we will treat the combined
        information as your Personal Information for all purposes under this
        Privacy Policy.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        How We Collect Information
      </h2>
      <h3 className="text-xl font-semibold mb-2">Site Visitors</h3>
      <p className="text-gray-700 mb-4">
        We allow you to visit our Site and review other information about our
        Services without revealing your identity or otherwise providing Personal
        Information. In that case, the only information that we collect from
        your visit will be Online Activity Information or Anonymous Information.
        As a casual site visitor, you decide whether to provide us with your
        Personal Information.
      </p>
      <h3 className="text-xl font-semibold mb-2">Contacting Innomatrics</h3>
      <p className="text-gray-700 mb-4">
        You can contact us with questions, comments, complaints, feedback,
        requests for information, or other communications. To communicate with
        us, you must provide certain Personal Information. We may use Personal
        Information and other information submitted to provide you with the
        information, products, and services that you have requested.
      </p>
      <h3 className="text-xl font-semibold mb-2">Employment Applications</h3>
      <p className="text-gray-700 mb-4">
        In the careers section of our Website and through other public job
        postings, we may invite you to apply for employment opportunities with
        us by submitting your Personal Information, employment information,
        resume and other, similar kinds of information. We may also rely on
        Service Providers to support the collection and processing of such
        information in connection with employment applications. We will treat
        such Personal Information you provide to us directly or that we receive
        from Service Providers in compliance with this Privacy Policy, and use
        this Personal Information to assess and process your employment
        application. We do not guarantee that we will contact you after you
        submit an employment application.
      </p>
      {/* Add more sections similarly */}
    </div>
  );
})
export default PrivacyPolicy;
