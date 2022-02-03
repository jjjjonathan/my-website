import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../styles';
import { Helmet } from 'react-helmet';
import { up } from 'styled-breakpoints';

type Props = {
  children: React.ReactNode;
};

const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.dark};
  margin-top: 50px;
  margin-bottom: 70px;
  text-align: center;
  font-size: 0.8rem;

  ${up('sm')} {
    font-size: 1rem;
  }
`;

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Jonathan Horn | Full Stack Web Developer</title>
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer>&copy; Copyright 2022 Jonathan Horn</Footer>
    </ThemeProvider>
  );
};

export default Layout;
