import React from 'react';

export const Pricing1 = () => {
  return (
    <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow ">
      <div className="text-center">
        <div className="text-lg font-semibold">Start</div>
        <div className="flex items-center justify-center mt-2">
          <div className="mr-1 text-5xl font-bold">Free</div>
        </div>
        <div className="mt-2 space-y-3">
          <div className="text-gray-700">10 deploys per day</div>
          <div className="text-gray-700">10 GB of storage</div>
          <div className="text-gray-700">20 domains</div>
        </div>
      </div>
      <div>
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
        >
          Start for free
        </a>
        <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
          Sed ut unde omnis iste natus accusantium doloremque.
        </p>
      </div>
    </div>
  );
};
