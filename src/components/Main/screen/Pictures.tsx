import { FunctionComponent } from "react";
import styled from "@emotion/styled";

const PictureCon = styled.section`

`
const PictureContent = styled.article`
  display: flex;
  justify-content: center;
`;
const PictureBox = styled.div`
  width: 640px;
  height: 2400px;
  background-color: #FFE5DF;
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.25);
  transform: translateY(-40px);
`;

const PictureTextCon = styled.div`
`;


const Pictures : FunctionComponent = function () {
  return (
    <PictureCon>
      <PictureContent>
        <PictureBox>

        </PictureBox>
        <PictureTextCon>
        </PictureTextCon>
      </PictureContent>
    </PictureCon>
  );

};

export default Pictures;