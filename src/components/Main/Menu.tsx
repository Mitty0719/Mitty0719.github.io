import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const MenuWrapper = styled('nav')`
  position: absolute;
  display: flex;
  flex-flow: column;
  top: 37.5px;
  right: 36px;
  gap: 32px;
`;
const MenuItem = styled('div')`
  font-size: 18px;
  font-weight: 700;
  text-align: right;
`;


const Menu: FunctionComponent = function(){
  return (
    <MenuWrapper>
      <MenuItem>DESIGN</MenuItem>
      <MenuItem>PHOTO</MenuItem>
      <MenuItem>PROJECT</MenuItem>
      <MenuItem>PROGRAMMING</MenuItem>
      <MenuItem>THINKING</MenuItem>
    </MenuWrapper>
  );
}

export default Menu;