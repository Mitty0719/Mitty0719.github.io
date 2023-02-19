import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import AboutMain from './AboutMain/AboutMain';
import AboutInfo from './AboutInfo/AboutInfo';
import AboutCareer from './AboutCareer/AboutCareer';

const AboutMeWrap = styled.div`
  width: 100%;
  // height: 100vh;
  background-color: #fff;
  section {
    width: 100%;
    padding: 50px 10vw;
    &[class*='AboutMain'] {
      padding: 0 0;
    }
  }
`;

const AboutMe : FunctionComponent = function(){
  return (
    <AboutMeWrap>
      <AboutMain/>
      <AboutInfo/>
      <AboutCareer/>
    </AboutMeWrap>
  );
}

export default AboutMe;