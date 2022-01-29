import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: 'mini';
  noTargetBlank?: boolean;
};

const MiniA = styled.a`
  font-variant-caps: all-small-caps;
  font-weight: 600;
`;

const Link = ({ children, href, variant, noTargetBlank }: Props) => {
  if (variant === 'mini')
    return (
      <MiniA href={href} target={noTargetBlank ? undefined : '_blank'}>
        {children}
      </MiniA>
    );

  return (
    <a href={href} target={noTargetBlank ? undefined : '_blank'}>
      {children}
    </a>
  );
};

export default Link;
