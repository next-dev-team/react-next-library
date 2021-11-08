import React from 'react';
import { Button } from '.';
import { DemoLayout } from '../helper';

const Demo = () => {
  return (
    <DemoLayout
      data={[
        {
          component: <Button title="Test" className="w-28" />,
          title: 'Button',
        },
        {
          component: <Button title="Test" />,
          title: 'Button',
        },
        {
          component: <Button title="Test" />,
          title: 'Button',
        },
        {
          component: <Button title="Test" />,
          title: 'Button',
        },
        {
          component: <Button title="Test" />,
          title: 'Button',
        },
      ]}
    />
  );
};

export default Demo;
