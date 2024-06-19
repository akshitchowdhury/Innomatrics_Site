import React, { forwardRef } from 'react';

const RefundCancellationPolicy = forwardRef((props,ref) => {
  return (
    <div className="container mx-auto px-4 py-8" ref={ref}>
      <h1 className="text-3xl font-bold mb-6">Refund/Cancellation Policy</h1>
      <p className="text-gray-700 mb-4">
        At Innomatrics Technologies, we value our customers and strive to provide the best service possible. We understand that circumstances may arise where you need to cancel your order or request a refund. Please read our Refund/Cancellation Policy carefully to understand your options.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Order Cancellation</h2>
      <p className="text-gray-700 mb-4">
        You may cancel your order within 24 hours of placing it for a full refund. To cancel your order, please contact our customer support team at hello@innomatricstech.com with your order details. Orders canceled after 24 hours may be subject to a cancellation fee.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
      <p className="text-gray-700 mb-4">
        We offer refunds for products returned in their original condition within 30 days of purchase. To initiate a refund, please contact our customer support team with your order details and reason for return. Refunds will be issued to the original payment method within 7-10 business days after the returned item is received and inspected.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Cancellation of Services</h2>
      <p className="text-gray-700 mb-4">
        If you wish to cancel a service subscription, please notify us at least 7 days before the next billing cycle to avoid being charged for the upcoming period. Refunds for service cancellations will be prorated based on the remaining duration of the subscription.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Exceptions</h2>
      <p className="text-gray-700 mb-4">
        Our refund/cancellation policy may vary for certain products or services. Please refer to the specific product/service terms and conditions for more information.
      </p>
      <p className="text-gray-700 mb-4">
        If you have any questions or concerns about our Refund/Cancellation Policy, please contact us at hello@innomatricstech.com.
      </p>
    </div>
  );
})

export default RefundCancellationPolicy;
