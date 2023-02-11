import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type ProjectItemProps = {
  title: String,
  content: String,
  startPeriod: String,
  endPeriod: String
}

const ProjectItemWrap = styled.div`
`;

const TitleWrap = styled.div`

`;
const ContentWrap = styled.div`
`;
const PeriodWrap = styled.div`
`;

const ProjectItem : FunctionComponent<ProjectItemProps> = function({title, content, startPeriod, endPeriod}) {
  return (
    <ProjectItemWrap>
      <TitleWrap>
        <h3>{title}</h3>
      </TitleWrap>
      <ContentWrap>
        {content}
      </ContentWrap>
      <PeriodWrap>
        {startPeriod} / {endPeriod}
      </PeriodWrap>
    </ProjectItemWrap>
  );
}

export default ProjectItem;
