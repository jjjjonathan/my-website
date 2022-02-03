import React from 'react';
import styled from 'styled-components';
import View from './View';

const Title = styled.h1`
  transform: rotate(${() => Math.random() * 6 - 3}deg);
`;

const Subtitle = styled.h2`
  font-weight: 200;
  transform: rotate(${() => Math.random() * 6 - 3}deg);
`;

const LandingView = () => {
  return (
    <View>
      <Title>jonathan horn</Title>
      <Subtitle>full stack web developer</Subtitle>
    </View>
  );
};

export default LandingView;
