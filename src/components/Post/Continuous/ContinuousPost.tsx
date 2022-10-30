import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostContent from 'components/Post/Common/PostContent';
import ContinuousPostHeader from './ContinuousPostHeader';
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

`;



const ContinuousPost: FunctionComponent<ContinuousPostProps> = function({
  node: {
    id, html,
    fields: { slug },
    frontmatter
  }
}){
  return <ContinuousPostWrap>
    <ContinuousPostHeader data={frontmatter}/>
    <PostContent html={html}/>
  </ContinuousPostWrap>
}

export default ContinuousPost;