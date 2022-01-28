import React from 'react';
import styled from 'styled-components';
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
  const icon = simpleIcons.Get('typescript');
  console.log('icon', icon);

  return (
    <View>
      <h2>Skills</h2>
      <SkillsContainer>
        <Skill dangerouslySetInnerHTML={{ __html: icon.svg }}></Skill>
      </SkillsContainer>
    </View>
  );
};

export default SkillsView;
