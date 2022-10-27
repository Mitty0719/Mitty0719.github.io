import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PostFrontmatterType } from 'types/PostItem.types';

type PostItemProps = PostFrontmatterType & { link: string };

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  transition: 0.3s box-shadow;
  cursor: pointer;
  // box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);

  // &:hover {
  //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  // }
  padding: 37.5px 36px;
  background-color: #fbfbfb;
`;

const ThumbnailImage = styled(GatsbyImage)`
  width: 1100px;
  height: 600px;
`;

const PostItemContent = styled.div`
  width: 1100px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 32px;
  font-weight: 700;
`;
const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: 50px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 18px;
  opacity: 0.8;
`;
const TagWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  gap: 42px;
  margin-top: 25px;
`;
const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;
const TagItem = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  opacity: 0.7;
`;



const PostItem: FunctionComponent<PostItemProps> = function({
  title, date, tags, summary, thumbnail: { 
    childImageSharp: { gatsbyImageData }
  }, link
}){
  return <PostItemWrapper to={link}>
    <PostItemContent>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
      <TagWrapper>
        <Tag>
          {tags.map(tag => (
            <TagItem key={tag}>#{tag}</TagItem>
          ))}
        </Tag>
        <Date>{date}</Date>
      </TagWrapper>
    </PostItemContent>
    <ThumbnailImage image={gatsbyImageData} alt="Post Image"/>
  </PostItemWrapper>
}

export default PostItem;