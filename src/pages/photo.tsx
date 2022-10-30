import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Template from 'components/Common/Template';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ContinuousPost from 'components/Post/Continuous/ContinuousPost';

type DesignPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: object
    }
    file: {
      childImageSharp: IGatsbyImageData
      publicURL: string
    }
  }
}

const DesignPage: FunctionComponent<DesignPageProps> = function({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: {
      edges
    },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    }
  }
}){
  return(
    <Template title={title} description={description} url={siteUrl} image={publicURL}>
      {
        Object.entries(edges).map(([id, {node}]) => {
          return <ContinuousPost key={id} node={node}/>
      })
      }
      {/* <PostContent html={html}/> */}
    </Template>
  );
}

export default DesignPage;


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
      filter: { frontmatter: { category: { eq: "photo" }}}
    ) {
      edges {
        node {
          html
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