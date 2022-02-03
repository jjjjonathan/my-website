import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 40px);
  padding: 25px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.dark};
  transform: rotate(${() => Math.random() * 4 - 2}deg);
  display: flex;
  align-items: center;
  justify-content: center;

  ${up('sm')} {
    padding: 60px;
  }

  ${up('md')} {
    padding: 100px;
  }
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
