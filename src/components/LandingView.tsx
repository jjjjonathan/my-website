import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import View from './View';
import getRotation from '../utils/get-rotation';

const Title = styled(motion.h1)``;

const Subtitle = styled(motion.h2)`
  font-weight: 200;
`;

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

const LandingView = () => {
  return (
    <View>
      <Title variants={variants}>jonathan horn</Title>
      <Subtitle variants={variants}>full stack web developer</Subtitle>
    </View>
  );
};

export default LandingView;
