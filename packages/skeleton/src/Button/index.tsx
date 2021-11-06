import React from 'react';
import { clx, getStringVal, tw, Tw } from '../helper';

export type IButtonProps = {
  title: string;
  className?: string;
  shape?: 'round' | 'square';
  color?: Tw;
};

export const Button = (props: IButtonProps) => {
  const { title, className, shape = 'round' } = props;

  const shapeType = shape === 'round' ? tw('rounded-full') : tw('rounded-sm');

  return (
    <button
      className={clx(
        'bg-red-300 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  hover:shadow-2xl hover:bg-red-40 text-white',
        shapeType,
        getStringVal(className),
      )}
    >
      {title}
    </button>
  );
};
