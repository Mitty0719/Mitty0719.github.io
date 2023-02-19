import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import IntroText from "./IntroText";

const IdentityWrap = styled.article`
`;

const title = 'Identity';
const content = [
  `MiracleMorning : 아침시간을 활용해 좋은 습관을 이어가고 있습니다.`,
  `TimeBlocking : 시간을 쪼개서 쓰는걸 다들 이렇게 부르더라고요.`,
  `Classical : 근본적인, 원초적인 요소들을 좋아합니다.`
]

const Identity:FunctionComponent = function() {
  return (
    <IdentityWrap>
      <IntroText title={title} content={content} />
    </IdentityWrap>
  )
}

export default Identity;