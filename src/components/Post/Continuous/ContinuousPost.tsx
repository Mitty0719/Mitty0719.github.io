import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostContent from 'components/Post/Common/PostContent';
import ContinuousPostHeader from 'components/Post/Continuous/ContinuousPostHeader';
import CommentLink from 'components/Post/Continuous/CommentLink'
import { PostFrontmatterType } from 'types/PostItem.types';

type ContinuousPostProps = {
  node: {
    id: string,
    html: string,
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}

const ContinuousPostWrap = styled.div`
  margin: 80px 0;
`;


const ContinuousPost: FunctionComponent<ContinuousPostProps> = function({
  node: {
    id, html,
    fields: { slug },
    frontmatter
  }
}){
  return <ContinuousPostWrap>
    {/* <ContinuousPostHeader data={frontmatter}/> */}
    {/* <PostContent html={html}/> */}
    {/* <CommentLink slug={slug}/> */}
    {/* 여기에 블럭 넣기 */}
  </ContinuousPostWrap>
}

export default ContinuousPost;