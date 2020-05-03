import React from "react"
import { Link } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import { css } from "@emotion/core"
import Grid from '../components/Grid'
import newImg from '../images/img.png'
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
      <Grid>
        {a.map((obj) => (
          <Img fixed={obj.image.asset.fixed}
          />
          /* <picture>

            <source src={newImg} />
          </picture> */



        ))}
      </Grid>

      <h3 css={css`font-family:'Staatliches'; font-size: 0.875rem`}>Photos : Nicholas James Mandelbaum</h3>
      <a css={css`font-size: 0.875rem; color: blueviolet; text-decoration`} href="https://www.twitter.com/nikoluzzi">twitter</a>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
          allSanityPhotographie {
          nodes {
          slug {
          current
        }
        image {
          asset {
          fixed(width: 300) {
          ...GatsbySanityImageFixed_noBase64
        }
          }
        }
      }
    }
  }
`
