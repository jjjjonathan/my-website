import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.dark};
  transform: rotate(${() => Math.random() * 4 - 2}deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const View = ({ children }: Props) => {
  return (
    <Container>
      <Box>
        <div>{children}</div>
      </Box>
    </Container>
  );
};

export default View;
