import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string;
  href: string;
};

const StyledA = styled.a`
  font-variant-caps: all-small-caps;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
`;

const Link = ({ children, href }: Props) => (
  <StyledA href={href} target="_blank">
    {children}
  </StyledA>
);

export default Link;
