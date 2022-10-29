import React, { FunctionComponent, useMemo } from 'react';
import Introduction from 'components/Main/Introduction';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
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
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    }
  },
}){

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}>
      
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
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      },
      publicURL
    }
  }
`