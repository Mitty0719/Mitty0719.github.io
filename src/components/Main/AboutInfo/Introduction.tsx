import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import IntroText from "./IntroText";

const IntroductionWrap = styled.article`
  grid-row: 1 / 3;
`;

const title = `Introduction`;
const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam quidem omnis nobis rerum accusamus, ut explicabo magnam quae nisi, eos dolorum qui adipisci cumque. Culpa molestiae nemo excepturi eveniet.`;

const Introduction:FunctionComponent = function() {
  return (
    <IntroductionWrap>
      <IntroText title={title} content={content} />
    </IntroductionWrap>
  )
}

export default Introduction;