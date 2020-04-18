import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const IndexPage = ({ data }) => {
  console.log(data)
  const a = data.allSanityPhotographie.nodes


  return (
    <div
      css={css`
            padding: 1rem;
            & > * {
              margin-bottom: 1rem;
            }
          `}
    >
      <h1 css={css`
            font-size: 10ch;
            text-align:center;
            margin: 5rem auto;
            color: #555;
            
          `}>Campolide 2020</h1>
      {a.map((obj) => (

        <Img fluid={obj.image.asset.fluid} />

      ))}
      <h3>Photos : Nicholas James Mandelbaum</h3>
      <a href="https://www.twitter.com/nikoluzzi">twitter</a>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allSanityPhotographie {
      nodes {
        title
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
