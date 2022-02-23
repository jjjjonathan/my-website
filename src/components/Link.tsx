import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: 'mini';
  noTargetBlank?: boolean;
  noUnderline?: boolean;
};

const StyledA = styled.a<{ noUnderline?: boolean; mini?: boolean }>`
  ${({ noUnderline }) => noUnderline && 'text-decoration: none;'}

  ${({ mini }) =>
    mini &&
    `
    font-variant-caps: all-small-caps;
    font-weight: 600;
  `}
`;

const Link = ({
  children,
  href,
  variant,
  noTargetBlank,
  noUnderline,
}: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{ width: 'fit-content', height: 'fit-content' }}
    >
      <StyledA
        href={href}
        target={noTargetBlank ? undefined : '_blank'}
        noUnderline={noUnderline}
        mini={variant === 'mini'}
      >
        {children}
      </StyledA>
    </motion.div>
  );
};

export default Link;
