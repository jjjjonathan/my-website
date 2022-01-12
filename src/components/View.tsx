import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 25px;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  border: 2px solid ${(props) => props.theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const View = ({ children }: Props) => (
  <Container>
    <Box>
      <div>{children}</div>
    </Box>
  </Container>
);

export default View;
