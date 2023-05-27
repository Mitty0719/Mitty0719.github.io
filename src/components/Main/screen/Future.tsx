import { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const FutureCon = styled.section`
  position: relative;
  height: 100vh;
`;
const FutureVerticalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #fafafa 5%, rgba(0, 0, 0, 0) 0);
  background-size: calc(100% / 8) 100%;
`;
const FutureHorizontalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #fafafa 5%, rgba(0, 0, 0, 0) 0);
  background-size: 150px calc(100% / 6);
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
`;
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
`;

const FutureTextCon = styled.div`
  position: absolute;
  bottom: 80px;
  right: 80px;
  font-size: 96px;
  font-weight: bold;
  letter-spacing: 10px;
`;
const IconText = styled.div`
  line-height: 116px;
`
const FutureIcon = styled.span`
  display: inline-block;
  min-width: 320px;
`;
const ChangedText = styled.div`
  min-height: 116px;
  line-height: 116px;
  text-align: left;
  cursor: pointer;
`;

const Future : FunctionComponent = function () {
  
  const futureList = ['Developer', 'Leader', 'Photographer', 'Mentor'];
  const futureColor = ['#fac901', '#225095', '#dd0100', '#fac901'];
  const dummyLetterList = ['#', '$', '%', '@', '~', '&', '+', '-', '=', '/'];
  const [futureTextIndex, setFutureTextIndex] = useState(0);
  const [changedText, setChangedText] = useState('');
  const [changedTextColor, setChangedTextColor] = useState({});
  let changedLetterIndex = 0;
  const [textChangeInterval, setTextChangeInterval] = useState(setInterval(()=>{}, 9999999));

  useEffect(() => {
    setFutureTextIndex(0);

  }, []);

  useEffect(() => {
    clearInterval(textChangeInterval);
    const targetText = futureList[futureTextIndex];
    setChangedTextColor({color: futureColor[futureTextIndex].toString()});
    typeTextEffect(targetText);

    setTimeout(() => {
      if(futureTextIndex >= futureList.length - 1) {
        setFutureTextIndex(0);
      } else {
        setFutureTextIndex(futureTextIndex + 1);
      }
    }, 5000)
  }, [futureTextIndex]);


  function typeTextEffect(targetText : String) {

    const interval = setInterval(() => {
      let showText = '';
      for(let i = 0; i < targetText.length; i++) {
        if(i <= changedLetterIndex) {
          showText += targetText[i];
        } else {
          showText += dummyLetterList[Math.round(Math.random() * (dummyLetterList.length - 1))];
        }
      }

      setChangedText(showText.toString());
      changedLetterIndex++;
    }, 80);

    setTextChangeInterval(interval);
  };

  return (
    <FutureCon>
      <FutureVerticalBackground />
      <FutureHorizontalBackground />
      <AsteriskCon>
        <AsteriskIcon src="../../../../image/icon_asterisk01.svg" alt="" />
        <AsteriskIcon src="../../../../image/icon_asterisk02.svg" alt="" />
        <AsteriskIcon src="../../../../image/icon_asterisk03.svg" alt="" />
      </AsteriskCon>
      <FutureTextCon>
        <IconText>I'll be (<FutureIcon></FutureIcon>)</IconText>
        <ChangedText style={changedTextColor}>{changedText}</ChangedText>
      </FutureTextCon>
    </FutureCon>
  );

};

export default Future;