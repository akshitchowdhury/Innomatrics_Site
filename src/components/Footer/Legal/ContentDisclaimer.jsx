import React, { forwardRef } from 'react';

const ContentDisclaimer = forwardRef((props,ref) => {
  return (
    <div className="container mx-auto px-4 py-8" ref={ref}>
      <h1 className="text-3xl font-bold mb-6">Content Disclaimer</h1>
      <p className="text-gray-700 mb-4">
        The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
      </p>
      <p className="text-gray-700 mb-4">
        In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
      </p>
      <p className="text-gray-700 mb-4">
        The content on this website is provided on an "as is" basis without any representations or warranties, express or implied. While we endeavor to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.
      </p>
      <p className="text-gray-700 mb-4">
        Through this website, you are able to link to other websites which are not under the control of our company. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
      </p>
      <p className="text-gray-700 mb-4">
        Every effort is made to keep the website up and running smoothly. However, our company takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
      </p>
      <p className="text-gray-700 mb-4">
        If you have any concerns about the accuracy or reliability of the information on this website, please contact us at hello@innomatricstech.com.
      </p>
    </div>
  );
})

export default ContentDisclaimer;
