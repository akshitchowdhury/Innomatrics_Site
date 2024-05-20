import React, { useEffect, useState } from 'react';

const CountUpAnimation = ({ initialValue, targetValue, text }) => {
  const [count, setCount] = useState(initialValue);
  const duration = 4000; // 4 seconds

  useEffect(() => {
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl font-bold text-orange-500">{count}</span>
      <span className="text-lg md:text-xl text-white mt-2">{text}</span>
    </div>
  );
};

function CountRise() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Delivering Value for Our Customers
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
        <div className="flex flex-col items-center">
          <CountUpAnimation initialValue={0} targetValue={150} text="Lives Impacted" />
        </div>
        <div className="w-px h-24 bg-orange-500 hidden md:block"></div>
        <div className="flex flex-col items-center">
          <CountUpAnimation initialValue={0} targetValue={400} text="Managed Services Customers" />
        </div>
        <div className="w-px h-24 bg-orange-500 hidden md:block"></div>
        <div className="flex flex-col items-center">
          <CountUpAnimation initialValue={0} targetValue={20} text="Delivery Centers" />
        </div>
      </div>
    </div>
  );
}

export default CountRise;
