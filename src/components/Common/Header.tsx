import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Menu from './Menu';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

type HeaderProps = {
}

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  padding: 20px 140px;
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
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  @media (max-width: 1023px){
    text-align: center;
  }
`;

const Header : FunctionComponent<HeaderProps> = function(){
  return (
    <Background>
      <Wrapper>
        <BlogNameWrap>
          <BlogName to="/">JINULEE&MITTY</BlogName>
        </BlogNameWrap>
        {/* <ProfileImage profileImage={ profileImage }/> */}

        <Menu/>
      </Wrapper>
    </Background>
  )
}

export default Header;