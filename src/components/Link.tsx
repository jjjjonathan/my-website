import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: 'mini';
  noTargetBlank?: boolean;
  noUnderline?: boolean;
};

const MiniA = styled.a`
  font-variant-caps: all-small-caps;
  font-weight: 600;
`;

const StyledA = styled.a<{ noUnderline?: boolean }>`
  ${({ noUnderline }) => noUnderline && 'text-decoration: none;'}
`;

const Link = ({
  children,
  href,
  variant,
  noTargetBlank,
  noUnderline,
}: Props) => {
  if (variant === 'mini')
    return (
      <MiniA href={href} target={noTargetBlank ? undefined : '_blank'}>
        {children}
      </MiniA>
    );

  return (
    <StyledA
      href={href}
      target={noTargetBlank ? undefined : '_blank'}
      noUnderline={noUnderline}
    >
      {children}
    </StyledA>
  );
};

export default Link;
