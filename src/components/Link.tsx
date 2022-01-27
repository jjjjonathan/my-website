import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactChild;
  href: string;
};

const StyledA = styled.a`
  font-variant-caps: all-small-caps;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.light};
`;

const Link = ({ children, href }: Props) => (
  <StyledA href={href} target="_blank">
    {children}
  </StyledA>
);

export default Link;
