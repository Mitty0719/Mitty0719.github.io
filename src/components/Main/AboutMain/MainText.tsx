import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const keyframe = keyframes`
  0%{
    left: 0;
    transform: translateX(-100%);
  }
  100%{
    left: 10vw;
    transform: translateX(0);
  }
`;

const MainTextWrap = styled.div`
  position: absolute;
  bottom: 100px;
  left: 0px;
  transform: translateX(-100%);
  animation: ${keyframe} 1s ease forwards;
  z-index: 2;
`;

const MainTextCon = styled.div`
  font-size: 60px;
  font-weight: bold;
  span {
    color: #82C76D;
  }
`;

const MainText:FunctionComponent = function(){
  return (
    <MainTextWrap>
      <MainTextCon>
        UX/UI 개발자<br/>
        <span>이진우</span> 입니다.
      </MainTextCon>
    </MainTextWrap>
  );
}

export default MainText;