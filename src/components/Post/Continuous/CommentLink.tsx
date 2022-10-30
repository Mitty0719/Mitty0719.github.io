import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type CommentLinkProps = {
  slug: string
}
const CommentLinkWrap = styled.div`
  display: block;
  width: 768px;
  margin: 20px auto;
  text-align: right;
  @media (max-width: 768px){
    width: 100%;
  }
`;
const CommentLinkItem = styled(Link)`
  font-size: 18px;
  margin-right: 20px;
  color: #a0a0a0;
  transition-duration: .3s;
`;



const CommentLink: FunctionComponent<CommentLinkProps> = function({
  slug
}){
  return <CommentLinkWrap>
      <CommentLinkItem to={slug}>Comment</CommentLinkItem>
    </CommentLinkWrap>
}

export default CommentLink;