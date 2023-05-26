import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const MenuWrapper = styled('nav')`
  position: absolute;
  display: flex;
  flex-flow: row;
  top: 20px;
  left: 50%;
  gap: 32px;
  transform: translateX(-50%);

  @media (max-width: 768px){
    position: relative;
    top: 0;
    width: 100%;
    justify-content: center;
  }
`;
const MenuItem = styled(Link)`
  position: relative;
  font-size: 14px;
  text-align: right;
  line-height: 22px;
  &:after{
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: #444;
    transition-duration: .8s;
    content: '';
}
  &:hover{
    &::after{
      width: 100%;
    }
  }
`;


const Menu: FunctionComponent = function(){
  return (
    <MenuWrapper>
      <MenuItem to="/">ABOUT ME</MenuItem>
      <MenuItem to="/web">WEB</MenuItem>
      <MenuItem to="/mobile">MOBILE</MenuItem>
      <MenuItem to="/design">DESIGN</MenuItem>
      <MenuItem to="/photo">PHOTO</MenuItem>
    </MenuWrapper>
  );
}

export default Menu;