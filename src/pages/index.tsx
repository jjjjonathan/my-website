import React from 'react';
import type { Project, Bio } from '../types/content';
import Layout from '../components/Layout';
import View from '../components/View';
import ProjectView from '../components/ProjectView';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import LandingView from '../components/LandingView';

type Props = {
  data: {
    projects: {
      nodes: Project[];
    };
    bio: {
      nodes: Bio[];
    };
  };
};

const Footer = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
`;

const IndexPage = ({ data }: Props) => {
  const projects = data.projects.nodes;
  const bio = data.bio.nodes[0].html;

  return (
    <Layout>
      <main>
        <LandingView />
        <View>
          <div dangerouslySetInnerHTML={{ __html: bio }}></div>
        </View>
        {projects.map((project) => (
          <ProjectView project={project} key={project.frontmatter.index} />
        ))}
        <View>
          <h2>Skills</h2>
        </View>
        <View>
          <h2>Resume</h2>
        </View>
        <View>
          <h2>Contact</h2>
        </View>
        <Footer>&copy; Copyright 2022 Jonathan Horn</Footer>
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___index }
      filter: { fields: { sourceName: { eq: "projects" } } }
    ) {
      nodes {
        frontmatter {
          title
          gif
          github
          index
          live
        }
        html
      }
    }
    bio: allMarkdownRemark(filter: { fields: { sourceName: { eq: "bio" } } }) {
      nodes {
        html
      }
    }
  }
`;

export default IndexPage;
