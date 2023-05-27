import React, { FunctionComponent } from 'react';
import { Global, css } from '@emotion/react';

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    // color: #707070;
  }

  html,
  body,
  #___gatsby{
    height: 100%;
  }

  a,
  a:hover{
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  /* scroll */
  ::-webkit-scrollbar{
    width: 8px;
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #707070;
  }
  ::-webkit-scrollbar-track{

  }
`;

const GlobalStyle : FunctionComponent = function(){
  return <Global styles={defaultStyle}/>
}

export default GlobalStyle;