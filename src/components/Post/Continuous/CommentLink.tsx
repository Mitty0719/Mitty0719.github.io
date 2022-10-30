import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostContent from 'components/Post/Common/PostContent';
import ContinuousPostHeader from './ContinuousPostHeader';
import { PostFrontmatterType } from 'types/PostItem.types';
import { Link } from 'gatsby';

type CommentLinkProps = {
  slug: string
}
const CommentLinkWrap = styled.div`
  display: block;
  width: 768px;
  margin: 20px auto;
  text-align: right;
`;
const CommentLinkItem = styled(Link)`
  font-size: 18px;
`;



const CommentLink: FunctionComponent<CommentLinkProps> = function({
  slug
}){
  return <CommentLinkWrap>
      <CommentLinkItem to={slug}>Comment</CommentLinkItem>
    </CommentLinkWrap>
}

export default CommentLink;