import React, { FunctionComponent, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Introduction from './Introduction';
import Identity from './Identity';

const AboutInfoWrap = styled.section`
  display: block;
  margin: 40vh 0;
`;

const AboutInfoInnerWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 60vh;
`;

const AboutInfo:FunctionComponent = function(){
  const aboutInfoWrap = useRef<HTMLDivElement>(null);

  return (
    <AboutInfoWrap ref={aboutInfoWrap}>
      <AboutInfoInnerWrap>
        <Introduction />
        <Identity />
      </AboutInfoInnerWrap>
    </AboutInfoWrap>
  );
}

export default AboutInfo;