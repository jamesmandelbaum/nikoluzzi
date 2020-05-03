import React from "react"
import { Link } from 'gatsby'
import { css } from "@emotion/core"
import Grid from '../components/Grid'
import newImg from '../images/img.png'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'


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
          <Link to={`photo/${obj.slug.current}`}>
            <picture>

              <source src={newImg} />
            </picture>
            <img
              src={imageUrlFor(buildImageObj(obj.image))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .url()}
            />

          </Link>

        ))}
      </Grid>

      <h3 css={css`font-family:'Staatliches'; font-size: 0.875rem`}>Photos : Nicholas James Mandelbaum</h3>
      <a css={css`font-size: 0.875rem; color: blueviolet; text-decoration`} href="https://www.twitter.com/nikoluzzi">twitter</a>
    </div>
  )
}

export default IndexPage

export const query = graphql`
fragment SanityImage on SanityImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
  query MyQuery {
    allSanityPhotographie {
      edges {
      node {
          slug {
            current
          }
          image {
            ...SanityImage
          }     
      }
    }
    }
  }
`
