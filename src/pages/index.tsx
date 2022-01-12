import React from 'react';
import { Project } from '../types/project';
import Layout from '../components/Layout';
import View from '../components/View';
import Link from '../components/Link';
import { graphql } from 'gatsby';

type Props = {
  data: {
    allMarkdownRemark: {
      nodes: Project[];
    };
  };
};

const IndexPage = ({ data }: Props) => {
  const { nodes } = data.allMarkdownRemark;

  return (
    <Layout>
      <main>
        <View>
          <h1>Jonathan Horn</h1>
          <h2>Full Stack Web Developer</h2>
        </View>
        <View>
          <p>
            I'm a self-taught web developer focusing on the front end, most
            specifically React. I've been studying web dev and building projects
            for about a year, and I've coded my way through the curriculum of
            both The Odin Project and Full Stack Open.
          </p>
        </View>
        {nodes.map(({ frontmatter, html }) => (
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
    allMarkdownRemark(sort: { fields: frontmatter___index }) {
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
  }
`;

export default IndexPage;
