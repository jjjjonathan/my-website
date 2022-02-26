import React from 'react';
import { motion } from 'framer-motion';
import getRotation from '../utils/get-rotation';

type Props = {
  asEl: string | React.ComponentType;
  children?: React.ReactNode;
};

const OffKilter = ({ asEl, children, ...props }: Props) => {
  const variants = {
    normal: {
      rotate: 0,
    },
    offKilter: {
      rotate: getRotation(1.5, 2),
      transition: {
        type: 'spring',
        bounce: 0.75,
      },
    },
  };

  const Motion = motion<{ children?: React.ReactNode }>(asEl);

  return (
    <Motion variants={variants} {...props}>
      {children}
    </Motion>
  );
};

export default OffKilter;
