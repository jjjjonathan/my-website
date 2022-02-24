import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
};

const Container = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
`;

const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 40px);
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
  const containerControls = useAnimation();
  const boxControls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.75 });
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    if (inView && !isRotated) {
      containerControls.start('partial');
      boxControls.start('rotate');
      setIsRotated(true);
    }
  }, [containerControls, boxControls, inView, isRotated]);

  const getRotation = () => {
    const range = Math.random() + 1.5;
    return Math.random() >= 0.5 ? range : -range;
  };

  const containerVariants = {
    full: { padding: '0px' },
    partial: { padding: '20px' },
  };

  const boxVariants = {
    straight: { rotate: 0 },
    rotate: {
      rotate: getRotation(),
      padding: '25px',
      borderRadius: '25px',
      transition: { delay: 0.2, type: 'spring', bounce: 0.75 },
    },
  };

  return (
    <Container
      variants={containerVariants}
      initial="full"
      animate={containerControls}
    >
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
