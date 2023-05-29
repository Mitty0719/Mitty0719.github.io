import { FunctionComponent } from "react";
import styled from "@emotion/styled";

const PictureCon = styled.section`
  margin-top: 400px;
`;

const PictureContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
`;
const PictureTitleCon = styled.div`
  width: 400px;
  border-bottom: solid 4px #000;
`;
const PictureTitle = styled.h3`
  font-size: 36px;
  text-align: right;
`;
const PictureBox = styled.div`
  margin-top: 30px;
`;
const PictureList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 2px;
`;
const PictureItem = styled.li`
  position: relative;
  display: inline-block;
  flex: 1;
  min-width: 440px;
  height: 360px;
  background-color: #fff;
  overflow: hidden;
`;
const PictureImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  // height: 100%;
  transform: translate(-50%, -50%);
`;


const Pictures : FunctionComponent = function () {
  return (
    <PictureCon>
      <PictureContent>
        <PictureTitleCon>
          <PictureTitle>PHOTOS</PictureTitle>
        </PictureTitleCon>
        <PictureBox>
          <PictureList>
            <PictureItem>
              <PictureImage src="../../../../picture/picture_station.jpg"></PictureImage>
            </PictureItem>
            <PictureItem>
              <PictureImage src="../../../../picture/picture_sky.jpg"></PictureImage>
            </PictureItem>
            <PictureItem>
              <PictureImage src="../../../../picture/picture_persimmon.jpg"></PictureImage>
            </PictureItem>
            <PictureItem>
              <PictureImage src="../../../../picture/picture_traditional_market.jpg"></PictureImage>
            </PictureItem>
            <PictureItem>
              <PictureImage src="../../../../picture/picture_morning_ocean.jpg"></PictureImage>
            </PictureItem>
            <PictureItem>
              <PictureImage src="../../../../picture/picture_tunnel.jpg"></PictureImage>
            </PictureItem>
          </PictureList>
        </PictureBox>
      </PictureContent>
    </PictureCon>
  );

};

export default Pictures;