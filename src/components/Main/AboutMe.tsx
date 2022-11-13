import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import AboutMain from './AboutMain/AboutMain';

const AboutMeWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  section {
    width: 100%;
    height: 100vh;
  }
`;

const AboutMe : FunctionComponent = function(){
  return (
    <AboutMeWrap>
      <AboutMain/>
    </AboutMeWrap>
  );
}

export default AboutMe;