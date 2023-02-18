import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type CareerItemProps = {
  title: String,
  content: String,
  startPeriod: String,
  endPeriod: String
}

const CareerItemWrap = styled.div`
  position: relative;
  width: 100%;
`;
const CareerInfoWrap = styled.div`
  position: relative;
  display: inline-flex;
  flex-flow: column nowrap;
  &:after {
    position: absolute;
    top: 50%;
    left: calc(100% + 1vw);
    width: 0;
    height: 2px;
    background-color: #000;
    transform: translate(0, -50%);
    transition-duration: 1s;
    content: '';
  }
  &:hover {
    &:after {
      width: calc(31vw - 100%);
    }
  }
`;
const TitleWrap = styled.div`
  width: fit-content;
  line-height: 30px;
`;
const PeriodWrap = styled.div`
  width: fit-content;
  height: 22px;
  line-height: 22px;
`;
const ContentWrap = styled.div`
  position: relative;
  float: right;
  width: 40vw;
  line-height: 30px;
  color: #eee;
  transition-duration: 1s;
`;


const CareerItem : FunctionComponent<CareerItemProps> = function({title, content, startPeriod, endPeriod}) {
  return (
    <CareerItemWrap>
      <CareerInfoWrap>
        <TitleWrap>
          <h3><pre>{title}</pre></h3>
        </TitleWrap>
        <PeriodWrap>
          {startPeriod} ~ {endPeriod}
      </PeriodWrap>
      </CareerInfoWrap>
      <ContentWrap>
        <p>
          {content}
        </p>
      </ContentWrap>
    </CareerItemWrap>
  );
}

export default CareerItem;
