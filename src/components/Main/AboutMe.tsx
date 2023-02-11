import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import AboutMain from './AboutMain/AboutMain';
import AboutInfo from './AboutInfo/AboutInfo';
import AboutProject from './AboutProject/AboutProject';

const AboutMeWrap = styled.div`
  width: 100%;
  // height: 100vh;
  background-color: #fff;
  section {
    width: 100%;
    height: 100vh;
    padding: 50px 140px;
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
      <AboutProject/>
    </AboutMeWrap>
  );
}

export default AboutMe;