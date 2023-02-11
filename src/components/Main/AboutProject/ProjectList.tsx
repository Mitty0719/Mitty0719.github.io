import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProjectItem from './ProjectItem';

const ProjectListWrap = styled.div`
`;

const ProjectList : FunctionComponent = function() {
  return (
    <ProjectListWrap>
      <ProjectItem title="이런저런 프로젝트" content="이런저런 프로젝트를 해서 이렇게 되었습니다." startPeriod="2022/01/01" endPeriod="2022/01/01" />
    </ProjectListWrap>
  );
};

export default ProjectList;