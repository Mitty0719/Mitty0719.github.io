import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type ProjectItemProps = {
  title: String,
  content: String,
  startPeriod: String,
  endPeriod: String
}

const ContentWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translate(50%, -50%);
  transition-duration: 1s;
  opacity: 0;
`;

const ProjectItemWrap = styled.div`
  &:hover ${ContentWrap} {
      opacity: 1;
  }
`;

const TitleWrap = styled.div`

`;
const PeriodWrap = styled.div`
`;

const ProjectItem : FunctionComponent<ProjectItemProps> = function({title, content, startPeriod, endPeriod}) {
  return (
    <ProjectItemWrap>
      <TitleWrap>
        <h3>{title}</h3>
      </TitleWrap>
      <PeriodWrap>
        {startPeriod} ~ {endPeriod}
      </PeriodWrap>
      <ContentWrap>
        <pre>
          {content}
        </pre>
      </ContentWrap>
    </ProjectItemWrap>
  );
}

export default ProjectItem;
