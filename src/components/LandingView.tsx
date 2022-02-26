import React from 'react';
import styled from 'styled-components';
import View from './View';
import OffKilter from './OffKilter';

const Subtitle = styled(OffKilter)`
  font-weight: 200;
`;

const LandingView = () => {
  return (
    <View>
      <OffKilter asEl="h1">jonathan horn</OffKilter>
      <Subtitle asEl="h2">full stack web developer</Subtitle>
    </View>
  );
};

export default LandingView;
