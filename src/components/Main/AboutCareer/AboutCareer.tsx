import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import CareerList from './CareerList';
import CompanyIconList from './CompanyIconList';


const AboutCareerWrap = styled.section`
  height: initial !important;
`;

const CareerTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 24px;
`;



const AboutCareer : FunctionComponent = function () {
  return (
    <AboutCareerWrap>
      <CompanyIconList/>
      <CareerTitle>
        <h3>Career</h3>
      </CareerTitle>
      <CareerList/>
    </AboutCareerWrap>
  );
}

export default AboutCareer;