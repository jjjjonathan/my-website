import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const View = ({ children }: Props) => {
  return (
    <Box>
      <div>{children}</div>
    </Box>
  );
};

export default View;
