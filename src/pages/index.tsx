import React from 'react';
import type { Project, Bio } from '../types/content';
import Layout from '../components/Layout';
import View from '../components/View';
import Link from '../components/Link';
import { graphql } from 'gatsby';

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

const IndexPage = ({ data }: Props) => {
  const projects = data.projects.nodes;
  const bio = data.bio.nodes[0].html;

  console.log('bio', bio);
  console.log('projects', projects);

  return (
    <Layout>
      <main>
        <View>
          <h1>Jonathan Horn</h1>
          <h2>Full Stack Web Developer</h2>
        </View>
        <View>
          <div dangerouslySetInnerHTML={{ __html: bio }}></div>
        </View>
        {projects.map(({ frontmatter, html }) => (
          <View>
            <h3>{frontmatter.title}</h3>
            <Link href={frontmatter.github}>Github</Link>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </View>
        ))}
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___index }
      filter: { fields: { sourceName: { eq: "md-projects" } } }
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
