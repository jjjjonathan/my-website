import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string;
  href: string;
};

const StyledA = styled.a`
  font-variant: small-caps;
  font-weight: 800;
`;

const Link = ({ children, href }: Props) => (
  <StyledA href={href} target="_blank">
    {children}
  </StyledA>
);

export default Link;
