import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import IntroText from "./IntroText";

const CareerWrap = styled.article`
`;

const title = `Career`;
const content = [
  `2014.03 ~ 2017.02 부산기계공업고등학교`,
  `2017.11 ~ 2018.04 (주)SEMES`,
  `2021.04 ~ 2021.11 미래정보기술(주)`,
  `2022.07 ~ (주)레이랩`
];

const Career:FunctionComponent = function() {
  return (
    <CareerWrap>
      <IntroText title={title} content={content} />
    </CareerWrap>
  )
}

export default Career;