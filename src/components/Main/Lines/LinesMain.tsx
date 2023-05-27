import React, { FunctionComponent, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import AboutMainCanvas from './LinesMainCanvas';

const AboutMainWrap = styled.section`
  position: relative;
  height: 100vh;
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
    </AboutMainWrap>
  );
}

export default AboutMain;