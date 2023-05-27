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
const AsteriskCon = styled.div`
  @keyframes asterisk-con-rotate {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }

  position: absolute;
  top: calc(64.5px + 120px);
  left: 180px;
  animation: asterisk-con-rotate 12s infinite linear;
  transform-origin: calc(64px / 2) calc(64px / 2);
`
const AsteriskIcon = styled.img`
  @keyframes asterisk-rotate {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
  
  position: absolute;
  width: 64px;
  top: 50%;
  left: 50%;
  animation: asterisk-rotate infinite linear;

  &:nth-of-type(1) {
    top:  -73.9px;
    left: 0;
    animation-duration: 8s;
  }
  &:nth-of-type(2) {
    top: 36.95px;
    left: -64px;
    animation-duration: 9s;
  }
  &:nth-of-type(3) {
    top: 36.95px;
    left: 64px;
    animation-duration: 10s;
  }
`

const Future : FunctionComponent = function () {
  return (
    <FutureCon>
      <AsteriskCon>
        <AsteriskIcon src="../../../../image/icon_asterisk01.svg" alt="" />
        <AsteriskIcon src="../../../../image/icon_asterisk02.svg" alt="" />
        <AsteriskIcon src="../../../../image/icon_asterisk03.svg" alt="" />
      </AsteriskCon>
      <FutureTextCon>
        <div>I'll be (<span></span>)</div>
        <div>Developer</div>
      </FutureTextCon>
    </FutureCon>
  );

};

export default Future;