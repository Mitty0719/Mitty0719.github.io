import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import CareerItem from './CareerItem';

const CareerListWrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 50px;
`;

const ItemsList = [
  {
    title: `Produce Display Initial Cleaner`,
    content: `
      중국업체에서 의뢰한 디스플레이 설비 제작 프로젝트에 참여했습니다.
      디스플레이 제작의 처음 단계에서 패널의 이물질을 제거하기 위한 설비인 Initial Cleaner의 설비를 검사를 담당했습니다.
      협력업체 담당 직원분과 함께 설비의 요소들이 허용치 안에 있는지 검사하는 과정을 거쳤습니다.
      제작되어있는 본사의 메뉴얼을 바탕으로 검사를 진행했으며 허용치 이상의 오차가 발생하면 보고 후 조치할 수 있도록 했습니다.
    `,
    startPeriod: `2017.11`,
    endPeriod: `2018.04`,
  },
  {
    title: `Film Company\nManufacturing Execution System`,
    content: `
      필름생산업체에서 의뢰한 생산관리시스템 제작 프로젝트에 참여했습니다.
      생산된 제품의 데이터를 현장에서 등록하고, 사무실에서도 데이터를 연동에 확인할 수 있는 생산관리시스템의 동작 구현을 담당했습니다.
      디자인된 화면이 내려오면 그 화면의 기능이 올바르게 동작할 수 있도록 제작하고 테스트를 진행했습니다.
      공정에 따라 데이터 등록/조회/수정/삭제가 가능하도록 제작했습니다.
      MSSQL로 Query를 작성해 DataBase에 요청하고 반환 데이터를 화면에 바인딩시켰습니다.
      회사정보, 인사정보, 입고등록, 출고등록, 현황등의 동작을 구현했습니다.

      제작된 생산관리시스템 테스트를 진행했습니다. 공정 순서대로 다양한 테스트 케이스로 실행해 오류를 수정하고 완성도를 높였습니다.

      현장에서 사용하는 PDA 프로그램의 코드를 분석하고 요구사항이 있다면 수정해 적용했습니다.

      DevExpress라이브러리의 리포트기능을 활용해 생산품의 결점내용을 그래프로 출력할 수 있는 리포트를 제작했습니다.

      화면설계서, 프로그램설계서, DB설계서 등 스마트팩토리 사업에 필요한 문서작업을 진행했습니다. 오피스 프로그램을 사용해 요구되는 조건에 맞춰 문서를 작성했습니다.

      사용자 분들이 기능을 쉽게 이해할 수 있도록 메뉴얼을 작성했습니다. 메뉴얼은 화면별로 작성했으며, 화면의 정보와 각각 요소의 기능을 알기쉽도록 기술했습니다.
    `,
    startPeriod: `2021.06`,
    endPeriod: `2021.10`,
  },
  {
    title: `Electron Beam Company\nManufacturing Execution System`,
    content: `
      전자선조사업체에서 의뢰한 생산관리시스템 제작 프로젝트에 참여했습니다.
      생산된 제품의 데이터를 현장에서 등록하고, 사무실에서도 데이터를 연동에 확인할 수 있는 생산관리시스템의 동작 구현을 담당했습니다.
      디자인된 화면이 내려오면 그 화면의 기능이 올바르게 동작할 수 있도록 제작하고 테스트를 진행했습니다.
      공정에 따라 데이터 등록/조회/수정/삭제가 가능하도록 제작했습니다.
      MSSQL로 Query를 작성해 DataBase에 요청하고 반환 데이터를 화면에 바인딩시켰습니다.
      회사정보, 인사정보, 조사등록, 현황등의 동작을 구현했습니다.

      제작된 생산관리시스템 테스트를 진행했습니다. 공정 순서대로 다양한 테스트 케이스로 실행해 오류를 수정하고 완성도를 높였습니다.
    `,
    startPeriod: `2021.08`,
    endPeriod: `2021.10`,
  },
  {
    title: `Posco\nSafety&Health System`,
    content: `
    
    `,
    startPeriod: `2022.07`,
    endPeriod: `in progress`,
  },
  {
    title: `PoscoE&C\nHumanResource System`,
    content: `
    
    `,
    startPeriod: `2023.01`,
    endPeriod: `in progress`,
  },
]

const CareerList : FunctionComponent = function() {
  return (
    <CareerListWrap>
      {
        ItemsList.map((item, index) => (
          <CareerItem
            key={`${item.title}_${index}`} 
            title={item.title} 
            content={item.content} 
            startPeriod={item.startPeriod} 
            endPeriod={item.endPeriod} />
        ))
      }
    </CareerListWrap>
  );
};

export default CareerList;