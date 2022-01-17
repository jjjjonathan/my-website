import React from 'react';
import type { Project } from '../types/content';
import View from './View';
import Link from './Link';

type Props = {
  project: Project;
};

const ProjectView = ({ project }: Props) => {
  const { frontmatter, html } = project;
  const { title, live, github, gif } = frontmatter;

  return (
    <View>
      <h3>{title}</h3>
      <Link href={github}>Github</Link>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </View>
  );
};

export default ProjectView;
