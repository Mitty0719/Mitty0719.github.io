import React, { FunctionComponent, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Introduction from './Introduction';
import Career from './Career';
import Identity from './Identity';

const AboutInfoWrap = styled.section`
  display: block;
`;

const AboutInfoInnerWrap = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

const AboutInfo:FunctionComponent = function(){
  const aboutInfoWrap = useRef<HTMLDivElement>(null);

  return (
    <AboutInfoWrap ref={aboutInfoWrap}>
      <AboutInfoInnerWrap>
        <Introduction />
        <Career />
        <Identity />
      </AboutInfoInnerWrap>
    </AboutInfoWrap>
  );
}

export default AboutInfo;