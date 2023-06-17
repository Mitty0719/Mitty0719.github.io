import React, { FunctionComponent, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const MobileMenuWrapper = styled('nav')`
  position: relative;
  top: 0;
  right: 0;
  display: none;
  z-index: 1001;
  @media (max-width: 1023px){
    display: block;
  }
  
`;

const MobileMenu = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100vh;
  padding-top: 100px;
  background-color: #fff;
  transform: translateX(100%);
  transition-duration: .4s;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  a {
    position: relative;
    display: block;
    right: 0;
    width: 100%;
    height: 48px;
    margin: 0 12px;
    padding: 0 12px;
    line-height: 48px;
    font-weight: bold;
    border-bottom: 1px solid #000;
    transform: translateX(100%);
    transition-duration: .8s;
  }
  &.active {
    transform: translateX(0);
    a {
      transform: translateX(0);
    }
  }
`;

const MobileMenuToggle = styled('div')`
  position: absolute;
  width: 26px;
  height: 16px;
  top: 32px;
  right: 20px;

  span {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 3px;
    background-color: #000;
    border-radius: 1px;
    transition-duration: .8s;
    &:first-of-type {
      top: 0;
    }
    &:last-of-type {
      bottom: 0;
    }
  }
  &.active {
    span {
      background-color: #fac901;
      &:first-of-type {
        transform: rotate(135deg) translateY(75%);
        top: 50%;
      }
      &:last-of-type {
        transform: rotate(45deg) translateY(75%);
        bottom: 50%;
      }
    }
  }
`;


const Menu: FunctionComponent = function(){
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);

  function onClickHandlerMobileMenuToggle () {
    setIsActiveMobileMenu(!isActiveMobileMenu);
  }

  return (
    <MobileMenuWrapper>
      <MobileMenu className={isActiveMobileMenu ? 'active' : ''}>
        <Link to="/">ABOUT ME</Link>
        <Link to="/web">WEB</Link>
        <Link to="/mobile">MOBILE</Link>
        <Link to="/design">DESIGN</Link>
        <Link to="/photo">PHOTO</Link>
      </MobileMenu>
      <MobileMenuToggle className={isActiveMobileMenu ? 'active' : ''} onClick={onClickHandlerMobileMenuToggle}>
        <span></span>
        <span></span>
      </MobileMenuToggle>
    </MobileMenuWrapper>
  );
}

export default Menu;