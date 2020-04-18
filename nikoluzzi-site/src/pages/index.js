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
            font-family:'Staatliches'
          `}
    >
      <h1 css={css`
            font-size: 5ch;
            text-align:center;
            margin: 3rem auto;
            color: #555;
            font-family:'Staatliches'
            
          `}>Campolide, Lisboa</h1>
      {a.map((obj) => (

        <Img fluid={obj.image.asset.fluid} />

      ))}
      <h3 css={css`font-family:'Staatliches'; font-size: 0.875rem`}>Photos : Nicholas James Mandelbaum</h3>
      <a css={css`font-size: 0.875rem; color: blueviolet; text-decoration:none`} href="https://www.twitter.com/nikoluzzi">twitter</a>
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
