import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import View from './View';
import simpleIcons from 'simple-icons';

const SkillsContainer = styled.div`
  display: flex;
`;

const Skill = styled.div`
  color: ${({ theme }) => theme.colors.light};
  width: 200px;
  height: 200px;
`;

const SkillsView = () => {
  // TODO type this
  const data = useStaticQuery(graphql`
    {
      allSkillsYaml {
        nodes {
          icon
          name
          id
        }
      }
    }
  `);

  const skills = data.allSkillsYaml.nodes;

  return (
    <View>
      <h2>Skills</h2>
      <SkillsContainer>
        {/* TODO type this */}
        {skills.map((skill) => (
          <Skill
            dangerouslySetInnerHTML={{
              __html: simpleIcons.Get(skill.icon).svg,
            }}
          />
        ))}
      </SkillsContainer>
    </View>
  );
};

export default SkillsView;
