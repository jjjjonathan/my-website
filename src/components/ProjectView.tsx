import React from 'react';
import type { Project } from '../types/content';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import View from './View';
import Link from './Link';
import OffKilter from './OffKilter';

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
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${up('sm')} {
    margin-bottom: 50px;
  }

  ${up('lg')} {
    margin-bottom: 20px;
    margin-left: 50px;
    align-items: flex-start;
  }

  ${up('xl')} {
    margin-left: 65px;
  }

  h3 {
    margin-top: 0;
  }
`;

const Links = styled.div`
  display: flex;
  transform: rotate(${() => Math.random() * 4 - 2}deg);

  div {
    margin-right: 20px;
  }

  div:last-child {
    margin-right: 0;
  }
`;

const Image = styled.div`
  img {
    width: 300px;
    border-radius: 12px;

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
          <OffKilter asEl="h3">{title}</OffKilter>
          <OffKilter asEl="div">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </OffKilter>
          <Links>
            <OffKilter asEl="div">
              <Link variant="mini" href={github}>
                Github
              </Link>
            </OffKilter>
            <OffKilter asEl="div">
              <Link variant="mini" href={live}>
                Live Preview
              </Link>
            </OffKilter>
          </Links>
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
