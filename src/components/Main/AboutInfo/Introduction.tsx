import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import IntroText from "./IntroText";

const IntroductionWrap = styled.article`
  grid-row: 1 / 3;
`;

const title = `Introduction`;
const content =
`Vanilla JavaScript를 좋아하는 UX/UI 개발자 입니다.
웹디자인 과정을 수료하며 본격적으로 프로그래밍을 접했고 현재 퍼블리셔로 커리어를 쌓고있습니다.
JavaScript로 인터렉션이 많은 웹 페이지를 만드는 것을 좋아합니다.
그리고 그저 JavaScript를 사랑합니다.





JavaScript . . .
JavaScript . .
JavaScript .
`;

const Introduction:FunctionComponent = function() {
  return (
    <IntroductionWrap>
      <IntroText title={title} content={content} />
    </IntroductionWrap>
  )
}

export default Introduction;