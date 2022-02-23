import React from 'react';
import styled from 'styled-components';

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
    <StyledA
      href={href}
      target={noTargetBlank ? undefined : '_blank'}
      noUnderline={noUnderline}
      mini={variant === 'mini'}
    >
      {children}
    </StyledA>
  );
};

export default Link;
