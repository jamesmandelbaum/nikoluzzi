/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPhotographie(filter: { slug: { current: { ne: null } } }) {
        edges{
          node {
            slug{
              current
            }
            image {
              asset {
                url
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const photos = result.data.allSanityPhotographie.edges || []
  photos.forEach((edge) => {
    const path = `/photo/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/components/photo.js"),
      context: { slug: edge.node.slug.current },
    })
  })
}