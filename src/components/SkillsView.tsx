import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import View from './View';
import simpleIcons from 'simple-icons';
import type { Skill } from '../types/content';

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18vw;
  margin-bottom: 10px;
`;

const SkillIconContainer = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.light};
    width: 12vw;
    height: 12vw;
  }
`;

const DescriptionBox = styled.div`
  width: 18vw;
`;

const SkillsView = () => {
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

  const skills: Skill[] = data.allSkillsYaml.nodes;

  return (
    <View>
      <h2>Skills</h2>
      <SkillsContainer>
        {skills.map((skill) => (
          <SkillBox key={skill.id}>
            <SkillIconContainer
              dangerouslySetInnerHTML={{
                __html: simpleIcons.Get(skill.icon).svg,
              }}
            />
            <small>{skill.name}</small>
          </SkillBox>
        ))}
      </SkillsContainer>
    </View>
  );
};

export default SkillsView;
