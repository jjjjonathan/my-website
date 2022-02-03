import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { FiDownload, FiArrowUpRight } from 'react-icons/fi';
import type { Project, Bio } from '../types/content';
import Layout from '../components/Layout';
import Link from '../components/Link';
import View from '../components/View';
import ProjectView from '../components/ProjectView';
import LandingView from '../components/LandingView';
import SkillsView from '../components/SkillsView';

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

const BioDiv = styled.div`
  margin: 10px;
`;

const Footer = styled.footer`
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
          <BioDiv dangerouslySetInnerHTML={{ __html: bio }} />
        </View>
        {projects.map((project) => (
          <ProjectView project={project} key={project.frontmatter.index} />
        ))}
        <SkillsView />
        <View>
          <h2>
            {/* TODO change link */}
            <Link href="https://google.com">
              Resume <FiDownload />
            </Link>
          </h2>
        </View>
        <View>
          <h2>Contact</h2>
          <h3>
            <Link href="mailto:jonathanhorn000@gmail.com" noTargetBlank>
              email <FiArrowUpRight />
            </Link>
          </h3>
          <h3>
            <Link href="https://github.com/jjjjonathan">
              github <FiArrowUpRight />
            </Link>
          </h3>
          <h3>
            <Link href="https://www.linkedin.com/in/jjjjonathan/">
              linkedin <FiArrowUpRight />
            </Link>
          </h3>
        </View>
      </main>
      <Footer>&copy; Copyright 2022 Jonathan Horn</Footer>
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
