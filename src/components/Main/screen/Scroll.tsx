import { FunctionComponent } from "react";
import styled from "@emotion/styled";

const ScrollCon = styled.section`
  position: relative;
`
const ScrollContent = styled.article`
  display: flex;
  justify-content: center;
`;
const ScrollBox = styled.div`
  width: 50vw;
  height: 2400px;
  background-color: #fdfdfd;
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.25);
  transform: translateY(-40px);
`;

const ScrollTextCon = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  top: 0;
  left: 0;
  padding: 0 80px;
  width: 100%;
  height: 90%;
`;
const ScrollTextList = styled.ul`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  top: 0%;
  left: 50%;
  height: 100%;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  &:first-of-type {
    transform: translateX(calc(-100% - 25vw - 36px));
    li {
      transform: rotate(180deg);
    }
  }
  &:last-of-type {
    transform: translateX(calc(25vw + 36px));
  }
`;
const ScrollTextItem = styled.li`
  font-size: 36px;
  font-weight: 800;
`;

const Scroll : FunctionComponent = function () {
  return (
    <ScrollCon>
      <ScrollContent>
        <ScrollTextCon>
          <ScrollTextList>
            <ScrollTextItem>Bike</ScrollTextItem>
            <ScrollTextItem>Constant</ScrollTextItem>
            <ScrollTextItem>NERD</ScrollTextItem>
          </ScrollTextList>
          <ScrollTextList>
            <ScrollTextItem>Steady</ScrollTextItem>
            <ScrollTextItem>고구마</ScrollTextItem>
            <ScrollTextItem>Fassional</ScrollTextItem>
            <ScrollTextItem>Picture</ScrollTextItem>
          </ScrollTextList>
        </ScrollTextCon>
        <ScrollBox>

        </ScrollBox>
      </ScrollContent>
    </ScrollCon>
  );

};

export default Scroll;