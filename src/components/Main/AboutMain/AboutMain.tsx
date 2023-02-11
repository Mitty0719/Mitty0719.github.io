import React, { FunctionComponent, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import MainText from './MainText';
import AboutMainCanvas from './AboutMainCanvas';

const AboutMainWrap = styled.section`
  position: relative;
`;

const AboutMain:FunctionComponent = function(){
  const aboutMainWrap = useRef<HTMLDivElement>(null);
  let aboutMainCanvas;

  useEffect(function(){
    if(aboutMainWrap.current){
      aboutMainCanvas = new AboutMainCanvas(aboutMainWrap.current);
    }
  }, [])

  return (
    <AboutMainWrap ref={aboutMainWrap}>
      <MainText/>
    </AboutMainWrap>
  );
}

export default AboutMain;