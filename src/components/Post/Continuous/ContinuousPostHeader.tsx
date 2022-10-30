import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { PostFrontmatterType } from 'types/PostItem.types';

type ContinuousPostHeaderProps = {
  data: PostFrontmatterType
}

const ContinuousPostHeaderWrap = styled.div`
  
`;

const ContinuousPostHeader: FunctionComponent<ContinuousPostHeaderProps> = function({
  data: {
    title, date, tags, summary,
    thumbnail: {
      childImageSharp: {
        gatsbyImageData
      },
      publicURL
    }
  }
}){
  return <ContinuousPostHeaderWrap>
    {title}
  </ContinuousPostHeaderWrap>
}

export default ContinuousPostHeader;