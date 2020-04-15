import React from "react"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  console.log(data)
  const a = data.allSanityPhotographie.nodes

  return (
    <>
      {a.map(obj => (
        <>
          <h1>{obj.title}</h1>
          <Img fluid={obj.image.asset.fluid} />
        </>
      ))}
    </>
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
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
