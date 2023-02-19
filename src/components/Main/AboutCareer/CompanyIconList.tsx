import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import CompanyIconItem from './ConpanyIconItem';

const COMPANY_LIST = [
  {
    name: `부산기계공업고등학교`,
    startDate: `2014.03`,
    endDate: `2017.02`,
    icon: `icon_school.svg`,
  },
  {
    name: `(주)SEMES`,
    startDate: `2017.11`,
    endDate: `2018.04`,
    icon: `icon_semes.svg`,
  },
  {
    name: `미래정보기술(주)`,
    startDate: `2021.04`,
    endDate: `2021.11`,
    icon: `icon_mirae.svg`,
  },
  {
    name: `(주)레이랩`,
    startDate: `2022.07`,
    endDate: ``,
    icon: `icon_raylab.svg`,
  },
];
const CompanyIconListWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0px;
`;
const CompanyIconTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 14px;
`;

const CompanyIconList: FunctionComponent = function() {
  return (
    <CompanyIconListWrap>
      <CompanyIconTitle>
        <h4>history</h4>
      </CompanyIconTitle>
      {
        COMPANY_LIST.map((company, index) => 
          <CompanyIconItem
            key={`${company.name}_${index}`}
            name={company.name}
            startDate={company.startDate}
            endDate={company.endDate}
            icon={company.icon} />
        )
      }
    </CompanyIconListWrap>
  );
}

export default CompanyIconList;