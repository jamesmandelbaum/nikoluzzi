module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ybohzlki",
        dataset: "production",

        // a token with read permissions is required
        // if you have a private dataset
        token:
          "skRQvRKkQ0JnqfIYUbmUofLVp2BjzUx2T2EV5LhNrXyCoX5FU0uVscVUrl6Z2aVVeoKKcRG582adtNUZmFWBqrxLVpzi4lmFkwyRegglJIPjH5i3ZS56hqbxekdAx9lbq6NeQ2EZGu0lIvoUhnH7g0hbwPr8VdyYxcJenMZAIJHrzk0XsArj",

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
