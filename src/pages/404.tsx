import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Link from '../components/Link';
import View from '../components/View';

const Container = styled.div`
  text-align: center;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <main>
        <View>
          <Container>
            <h3>404 Not Found</h3>
            <Link href="/" noTargetBlank>
              Go home
            </Link>
          </Container>
        </View>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
