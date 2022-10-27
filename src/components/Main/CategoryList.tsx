import React, { FunctionComponent, ReactNode } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

export type TagListProps = {
  selectedTag: string,
  tagList: {
    [key: string]: number
  }
}

type TagItemProps = {
  active: boolean
};
type GatsbyLinkProps = {
  children: ReactNode,
  className?: string,
  to: string
} & TagItemProps;

const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`;

const TagItem = styled(({ active, ...props} : GatsbyLinkProps) => (
  <Link {...props}/>
))<TagItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({active}) => active ? 800 : 400};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px){
    font-size: 15px;
  }
`

const TagList : FunctionComponent<TagListProps> = function({
  selectedTag,
  tagList
}){
  return <TagListWrapper>
    {Object.entries(tagList).map(([name, count]) => (
      <TagItem
        to={`/?tag=${name}`}
        active={name === selectedTag}
        key={name}>
        #{name}({count})
      </TagItem>
    ))}
  </TagListWrapper>
}

export default TagList;