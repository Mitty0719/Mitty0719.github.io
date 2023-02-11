import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import IntroText from "./IntroText";

const IdentityWrap = styled.article`
`;

const title = 'Identity';
const content = [
  `MiracleMorning`,
  `TimeBlocking`,
  `Classical`
]

const Identity:FunctionComponent = function() {
  return (
    <IdentityWrap>
      <IntroText title={title} content={content} />
    </IdentityWrap>
  )
}

export default Identity;