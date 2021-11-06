import React from 'react';
import { Pricing1, Pricing2, Pricing3 } from '.';

const Demo = () => {
  return (
    <>
      <div className="flex justify-center">
        <Pricing1 />
        <Pricing2 />
      </div>
      <div className="flex justify-center mt-10 ">
        <Pricing3 />
      </div>
    </>
  );
};

export default Demo;
