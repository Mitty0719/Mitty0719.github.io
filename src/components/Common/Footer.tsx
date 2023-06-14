import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 20px;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px){
    font-size: 13px;
  }
`;

const Footer : FunctionComponent = function() {
  return (
    <FooterWrapper>
      <div style={{fontSize: 12, color: '#aaa', marginBottom: 12}}>
        To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the purpose of 'Life'.
      </div>
      © 2023 Developer Mitty, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer;