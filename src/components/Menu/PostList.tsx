import React, { FunctionComponent, useMemo } from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';
import { PostListItemType } from 'types/PostItem.types';
import useInfinityScroll, { useInfiniteScrollType } from 'hooks/useInfinityScroll';

type PostListProps = {
  selectedTag: string,
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 320px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px){
    width: 100%;
    padding: 50px 20px;
  }
`;

const PostList : FunctionComponent<PostListProps> = function({
  selectedTag,
  posts
}){

  const { containerRef, postList }: useInfiniteScrollType = useInfinityScroll(selectedTag, posts);

  return <PostListWrapper ref={containerRef}>
    { postList.map(
      ({ 
        node: { 
          id,
          fields: { slug },
          frontmatter
        }
      }: PostListItemType) => (
        <PostItem {...frontmatter} link={slug} key={id} />
      ),
    )}
  </PostListWrapper>
}

export default PostList;