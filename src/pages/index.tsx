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
import resume from '../static/JonathanHornResume.pdf';
import OffKilter from '../components/OffKilter';

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

const BioTitle = styled(OffKilter)`
  width: fit-content;
`;

const BioDiv = styled.div`
  margin: 10px;
  max-width: 800px;
`;

const IndexPage = ({ data }: Props) => {
  const projects = data.projects.nodes;
  const bio = data.bio.nodes[0].html;

  return (
    <Layout>
      <header>
        <LandingView />
      </header>
      <main>
        <View>
          <BioTitle asEl="h2">about</BioTitle>
          <OffKilter>
            <BioDiv dangerouslySetInnerHTML={{ __html: bio }} />
          </OffKilter>
        </View>
        {projects.map((project) => (
          <ProjectView project={project} key={project.frontmatter.index} />
        ))}
        <SkillsView />

        {/* <View>
          <h2>
            <Link href={resume} noUnderline>
              Resume <FiDownload />
            </Link>
          </h2>
        </View> */}

        <View>
          <OffKilter asEl="h2">Contact</OffKilter>
          <OffKilter asEl="h3">
            <Link
              href="mailto:jonathanhorn000@gmail.com"
              noTargetBlank
              noUnderline
            >
              email <FiArrowUpRight />
            </Link>
          </OffKilter>
          <OffKilter asEl="h3">
            <Link href="https://github.com/jjjjonathan" noUnderline>
              github <FiArrowUpRight />
            </Link>
          </OffKilter>
          {/* <OffKilter asEl="h3">
            <Link href="https://www.linkedin.com/in/jjjjonathan/" noUnderline>
              linkedin <FiArrowUpRight />
            </Link>
          </OffKilter> */}
        </View>
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
