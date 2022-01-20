import React from 'react';
import type { Project } from '../types/content';
import styled from 'styled-components';
import View from './View';
import Link from './Link';

// Will load all gifs in the following folder into ./gifs
require.context('../images/projects');

type Props = {
  project: Project;
};

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  border: 1px solid white;
`;

const Image = styled.div`
  border: 1px solid white;
`;

const ProjectView = ({ project }: Props) => {
  const { frontmatter, html } = project;
  const { title, live, github, gif } = frontmatter;

  return (
    <View>
      <Container>
        <Image>
          <img src={`./gifs/${gif}`} alt={`Preview of ${title}`} />
        </Image>
        <Content>
          <h3>{title}</h3>
          <Link href={github}>Github</Link>
          <Link href={live}>Live Preview</Link>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Content>
      </Container>
    </View>
  );
};

export default ProjectView;
