import { FunctionComponent } from "react";
import styled from "@emotion/styled";

const ScrollCon = styled.section`

`
const ScrollContent = styled.article`
  display: flex;
  justify-content: center;
`;
const ScrollBox = styled.div`
  width: 640px;
  height: 2400px;
  background-color: #FFE5DF;
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.25);
  transform: translateY(-40px);
`;

const ScrollTextCon = styled.div`
`;

const Scroll : FunctionComponent = function () {
  return (
    <ScrollCon>
      <ScrollContent>
        <ScrollBox>

        </ScrollBox>
        <ScrollTextCon>
        </ScrollTextCon>
      </ScrollContent>
    </ScrollCon>
  );

};

export default Scroll;