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
`;

const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 35px;
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
  const boxControls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.75 });
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    if (inView && !isRotated) {
      boxControls.start('rotate');
      setIsRotated(true);
    }
  }, [boxControls, inView, isRotated]);

  const getRotation = () => {
    const range = Math.random() + 1.5;
    return Math.random() >= 0.5 ? range : -range;
  };

  const boxVariants = {
    straight: { rotate: 0 },
    rotate: {
      rotate: getRotation(),
      scale: 0.95,
      borderRadius: '25px',
      transition: { delay: 0.2, type: 'spring', bounce: 0.75 },
    },
  };

  return (
    <Container>
      <Box
        ref={ref}
        variants={boxVariants}
        initial="straight"
        animate={boxControls}
      >
        <div>{children}</div>
      </Box>
    </Container>
  );
};

export default View;
