import React from 'react';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { graphql } from "gatsby"

const Page = ({ pageContext, data }) => {
  const bg = data.sanityPhotographie.image.asset.metadata.palette.dominant.background
  return (
    <div css={css`
    background: ${bg}
    `}>
      {/* {post && <BlogPost {...post} />} */}
      <Img fluid={data.sanityPhotographie.image.asset.fluid} />

    </div>
  )
}

export default Page;

export const query = graphql`
 
query($slug: String!)  {
  sanityPhotographie(slug: { current: { eq: $slug } }) {
    image{
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
        metadata {
          palette{
            dominant {
              background
            }
          }
        }
      }
    }
  }
}
`