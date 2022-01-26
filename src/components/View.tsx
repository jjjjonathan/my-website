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

const Box = styled.div<{ rotation: number }>`
  width: 100%;
  height: 100%;
  padding: 25px;
  border: 5px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.offWhite};
  transform: rotate(${({ rotation }) => rotation}deg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const View = ({ children }: Props) => {
  const rotation = Math.random() * 4 - 2;

  return (
    <Container>
      <Box rotation={rotation}>
        <div>{children}</div>
      </Box>
    </Container>
  );
};

export default View;
