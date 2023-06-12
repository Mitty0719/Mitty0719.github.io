import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Future from './screen/Future';
import Scroll from './screen/Scroll';
import Pictures from './screen/Pictures';
import Resume from './screen/Resume';
import GoldenRatio from './screen/GoldenRatio';

const AboutMeWrap = styled.div`
  width: 100%;
  // height: 100vh;
  background-color: #fff;
  section {
    width: 100%;
    padding: 0 80px;
  }
`;

const AboutMe : FunctionComponent = function(){
  return (
    <AboutMeWrap>
      <Future />
      <GoldenRatio />
      {/* <Scroll /> */}
      <Pictures />
      <Resume />
    </AboutMeWrap>
  );
}

export default AboutMe;