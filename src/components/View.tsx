import React, { useEffect } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import getRotation from '../utils/get-rotation';

type Props = {
  children: React.ReactNode;
  speed?: 'fast';
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
`;

const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  /* min-height must include Container padding */
  min-height: calc(100vh - 40px);
  padding: 35px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;

  ${up('sm')} {
    padding: 60px;
    border-radius: 35px;
  }

  ${up('md')} {
    padding: 100px;
    border-radius: 40px;
  }
`;

const View = ({ children, speed }: Props) => {
  const boxControls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const staggerChildren = speed === 'fast' ? 0.1 : 0.3;

  useEffect(() => {
    if (inView) {
      boxControls.start('offKilter');
    } else {
      boxControls.start('normal');
    }
  }, [boxControls, inView]);

  const boxVariants = {
    normal: {
      rotate: 0,
      scale: 1,
    },
    offKilter: {
      rotate: getRotation(1, 1.5),
      scale: 0.95,
      transition: {
        delay: 0.2,
        type: 'spring',
        bounce: 0.75,
        delayChildren: 0.5,
        staggerChildren,
      },
    },
  };

  return (
    <Container>
      <Box
        ref={ref}
        variants={boxVariants}
        initial="normal"
        animate={boxControls}
      >
        <div>{children}</div>
      </Box>
    </Container>
  );
};

export default View;
