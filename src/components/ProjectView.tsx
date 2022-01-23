import React from 'react';
import type { Project } from '../types/content';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import View from './View';
import Link from './Link';

// Will load all gifs in the following folder into ./gifs
require.context('../images/projects');

type Props = {
  project: Project;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${up('lg')} {
    flex-direction: row-reverse;
  }
`;

const Content = styled.div`
  margin-bottom: 30px;
  text-align: center;

  ${up('lg')} {
    text-align: left;
    margin-left: 25px;
  }

  ${up('xl')} {
    margin-left: 35px;
  }

  h3 {
    margin-top: 0;
  }

  a {
    margin-right: 10px;
  }
`;

const Image = styled.div`
  img {
    width: 300px;
    border-radius: 3px;

    ${up('sm')} {
      width: 400px;
    }

    ${up('lg')} {
      width: 300px;
    }

    ${up('xl')} {
      width: 400px;
    }
  }
`;

const ProjectView = ({ project }: Props) => {
  const { frontmatter, html } = project;
  const { title, live, github, gif } = frontmatter;

  return (
    <View>
      <Container>
        <Content>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <Link href={github}>Github</Link>
          <Link href={live}>Live Preview</Link>
        </Content>
        <Image>
          <Link href={live}>
            <img src={`./gifs/${gif}`} alt={`Preview of ${title}`} />
          </Link>
        </Image>
      </Container>
    </View>
  );
};

export default ProjectView;
