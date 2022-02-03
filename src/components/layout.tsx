import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../styles';
import { Helmet } from 'react-helmet';

type Props = {
  children: React.ReactNode;
};

const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.dark};
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
`;

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Jonathan Horn | Full Stack Web Developer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer>&copy; Copyright 2022 Jonathan Horn</Footer>
    </ThemeProvider>
  );
};

export default Layout;
