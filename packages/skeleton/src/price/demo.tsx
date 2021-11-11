import React from 'react';
import { Pricing1, Pricing3 } from '.';
import { DemoLayout } from '../helper/layout';
import { Pricing2 } from './components/price2';

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
