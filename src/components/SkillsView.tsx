import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { useStaticQuery, graphql } from 'gatsby';
import View from './View';
import simpleIcons from 'simple-icons';
import type { Skill } from '../types/content';
import OffKilter from './OffKilter';

const Title = styled.div`
  text-align: center;
  margin-bottom: 40px;

  ${up('md')} {
    margin-bottom: 60px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18vw;
  margin-bottom: 25px;

  ${up('sm')} {
    width: 100px;
  }

  ${up('md')} {
    margin-bottom: 35px;
  }
`;

const IconContainer = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.light};
    width: 12vw;
    height: 12vw;

    ${up('sm')} {
      width: 60px;
      height: 60px;
    }
  }
`;

const IconName = styled.div`
  text-align: center;
  font-size: 3vw;

  ${up('sm')} {
    font-size: 1rem;
  }
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
      <Title>
        <OffKilter asEl="h2">Skills</OffKilter>
      </Title>
      <SkillsContainer>
        {skills.map((skill) => (
          <SkillBox key={skill.id}>
            <IconContainer
              dangerouslySetInnerHTML={{
                __html: simpleIcons.Get(skill.icon).svg,
              }}
            />
            <IconName>{skill.name}</IconName>
          </SkillBox>
        ))}
      </SkillsContainer>
    </View>
  );
};

export default SkillsView;
