import React, { FunctionComponent, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import MainText from './MainText';

const AboutMainWrap = styled.section`
  
`;

const AboutMain:FunctionComponent = function(){

  const aboutMainWrap = useRef<any>(null);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  function resize(){
    if(aboutMainWrap.current){
      canvas.width = aboutMainWrap.current.clientWidth;
      canvas.height = aboutMainWrap.current.clientHeight;
    }
  }

  useEffect(() => {
    resize();
  }, []);

  return (
    <AboutMainWrap ref={aboutMainWrap}>
      <MainText/>
    </AboutMainWrap>
  );
}

export default AboutMain;