import React, { FunctionComponent, useMemo } from 'react';
import Introduction from 'components/Main/Introduction';
import TagList, { TagListProps } from 'components/Main/TagList';
import PostList  from 'components/Main/PostList';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { PostListItemType } from 'types/PostItem.types';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import Template from 'components/Common/Template';

type indexPageProps = {
  location: {
    search: string
  },
  data: {
    site: {
      siteMetadata: {
        title: string,
        description: string,
        siteUrl: string
      }
    },
    allMarkdownRemark: {
      edges: PostListItemType[]
    },
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData,
      }
      publicURL: string
    }
  },
}

const IndexPage: FunctionComponent<indexPageProps> = function({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl }
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    }
  },
}){

  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedTag: string = typeof parsed.tag !== 'string' || !parsed.tag
  ? 'All'
  : parsed.tag;

  const tagList = useMemo(
    () => edges.reduce(
      (
        list: TagListProps['tagList'],
        {
          node: {
            frontmatter: { tags },
          },
        }: PostListItemType,
      ) => {
        tags.forEach(tag => {
          if(list[tag] === undefined) list[tag] = 1;
          else list[tag]++;
        })
        list['All']++;

        return list;
      },
      { All: 0 },
    ),
    []
  )

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}>
      <Introduction profileImage={gatsbyImageData}/>
      {/* <TagList selectedTag={selectedTag} tagList={tagList}/> */}
      {/* <PostList posts={edges} selectedTag={selectedTag}/> */}
    </Template>
  )
}

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    site{
      siteMetadata{
        title,
        description,
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            category
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height:400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      },
      publicURL
    }
  }
`