import React from 'react';

export const Pricing2 = () => {
  return (
    <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-purple-500">
      <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
        <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-purple-500">
          Most Popular
        </div>
      </div>
      <div className="text-center">
        <div className="text-lg font-semibold">Pro</div>
        <div className="flex items-center justify-center mt-2">
          <div className="mr-1 text-5xl font-bold">$38</div>
          <div className="text-gray-700">/ mo</div>
        </div>
        <div className="mt-2 space-y-3">
          <div className="text-gray-700">200 deploys per day</div>
          <div className="text-gray-700">80 GB of storage</div>
          <div className="text-gray-700">Global CDN</div>
        </div>
      </div>
      <div>
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
        >
          Buy Pro
        </a>
        <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
          Sed ut unde omnis iste natus accusantium doloremque.
        </p>
      </div>
    </div>
  );
};
