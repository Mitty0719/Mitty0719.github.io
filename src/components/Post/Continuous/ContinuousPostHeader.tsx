import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { PostFrontmatterType } from 'types/PostItem.types';

type ContinuousPostHeaderProps = {
  data: PostFrontmatterType
}

const ContinuousPostHeaderWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  width: 100%;
`;
const ContinuousPostHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`;
const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 400;
  }
`;
const Tags = styled.div`
  font-size: 14px;
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
    <ContinuousPostHeaderInfo>
      <Title>{title}</Title>
      <PostData>
        <div>{date}</div>
        <Tags>{tags.join(' / ')}</Tags>
      </PostData>
    </ContinuousPostHeaderInfo>
  </ContinuousPostHeaderWrap>
}

export default ContinuousPostHeader;