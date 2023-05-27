import { FunctionComponent } from "react";
import styled from "@emotion/styled";

const FutureCon = styled.section`
  position: relative;
  height: 100vh;
`;
const FutureTextCon = styled.div`
  position: absolute;
  bottom: 80px;
  right: 80px;
  font-size: 96px;
`;

const Future : FunctionComponent = function () {
  return (
    <FutureCon>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <FutureTextCon>
        <div>I'll be (<span></span>)</div>
        <div>Developer</div>
      </FutureTextCon>
    </FutureCon>
  );

};

export default Future;