import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage from './ProfileImage';
import Menu from './Menu';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

type HeaderProps = {
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
  margin: 0 auto;
  padding: 37.5px 36px;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    padding: 0 20px;
  }
`;
const BlogNameWrap = styled.div`
  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
  }
`;
const BlogName = styled(Link)`
  font-size: 22px;
  line-height: 22px;
`;

const Header : FunctionComponent<HeaderProps> = function(){
  return (
    <Background>
      <Wrapper>
        <BlogNameWrap>
          <BlogName to="/">JinWooLee&Mitty</BlogName>
        </BlogNameWrap>
        {/* <ProfileImage profileImage={ profileImage }/> */}

        <Menu/>
      </Wrapper>
    </Background>
  )
}

export default Header;