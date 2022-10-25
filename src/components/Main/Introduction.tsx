import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage from './ProfileImage';
import Menu from './Menu';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  background-image: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 37.5px 36px;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;
const BlogName = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Introduction : FunctionComponent<IntroductionProps> = function({ profileImage }){
  return (
    <Background>
      <Wrapper>
        <BlogName>UX/UI Developer</BlogName>
        {/* <ProfileImage profileImage={ profileImage }/> */}

        <Menu/>
      </Wrapper>
    </Background>
  )
}

export default Introduction;