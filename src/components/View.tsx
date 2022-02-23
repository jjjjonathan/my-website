import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
`;

const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 40px);
  padding: 25px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.dark};
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
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.75 });
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    if (inView && !isRotated) {
      controls.start('rotate');
      setIsRotated(true);
    }
  }, [controls, inView, isRotated]);

  const getRotation = () => {
    const range = Math.random() + 1.5;
    return Math.random() >= 0.5 ? range : -range;
  };

  const variants = {
    straight: { rotate: 0 },
    rotate: { rotate: getRotation(), transition: { delay: 0.2 } },
  };

  return (
    <Container>
      <Box ref={ref} variants={variants} initial="straight" animate={controls}>
        <div>{children}</div>
      </Box>
    </Container>
  );
};

export default View;
