import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type profileImageProps = {
  profileImage: IGatsbyImageData
}

const PROFILE_IMAGE_LINK = 'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg';

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileImage: FunctionComponent<profileImageProps> = function ({ profileImage }){
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage;