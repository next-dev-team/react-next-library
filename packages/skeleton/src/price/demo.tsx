import React from 'react';
import { Pricing1, Pricing2, Pricing3 } from '.';
import { DemoLayout } from '../helper/layout';

const Demo = () => {
  return (
    <DemoLayout
      data={[
        { title: 'Price1', component: <Pricing1 /> },
        { title: 'Price2', component: <Pricing2 /> },
        { title: 'Price3', component: <Pricing3 /> },
      ]}
    />
  );
};

export default Demo;
