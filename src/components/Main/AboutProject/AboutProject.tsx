import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProjectList from './ProjectList';


const AboutProjectWrap = styled.section`
`;

const ProjectTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 24px;
`;



const AboutProject : FunctionComponent = function () {
  return (
    <AboutProjectWrap>
      <ProjectTitle>
        <h3>Project</h3>
      </ProjectTitle>
      <ProjectList></ProjectList>
    </AboutProjectWrap>
  );
}

export default AboutProject;