import React, { useEffect } from 'react';
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
  min-height: 100vh;
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

const View = ({ children }: Props) => {
  const boxControls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      boxControls.start('pop');
    } else {
      boxControls.start('fill');
    }
  }, [boxControls, inView]);

  const getRotation = () => {
    const range = Math.random() + 1.5;
    return Math.random() >= 0.5 ? range : -range;
  };

  const boxVariants = {
    fill: {
      rotate: 0,
      scale: 1,
    },
    pop: {
      rotate: getRotation(),
      scale: 0.95,
      transition: { delay: 0.2, type: 'spring', bounce: 0.75 },
    },
  };

  return (
    <Container>
      <Box
        ref={ref}
        variants={boxVariants}
        initial="fill"
        animate={boxControls}
      >
        <div>{children}</div>
      </Box>
    </Container>
  );
};

export default View;
