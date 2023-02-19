import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import CareerList from './CareerList';
import CompanyIconList from './CompanyIconList';


const AboutCareerWrap = styled.section`
  height: initial !important;
`;

const CareerTitleCon = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`
const CareerTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;



const AboutCareer : FunctionComponent = function () {
  return (
    <AboutCareerWrap>
      <CareerTitleCon>
        <CareerTitle>
          <h3>Career</h3>
        </CareerTitle>
        <CompanyIconList/>
      </CareerTitleCon>
      <CareerList/>
    </AboutCareerWrap>
  );
}

export default AboutCareer;