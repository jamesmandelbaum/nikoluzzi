module.exports = {
  siteMetadata: {
    title: `Nikoluzzi`,
    description: `Un site photographique et poétique`,
    author: `Nicholas James Mandelbaum`,
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
        name: `Nikoluzzi Photo Blog`,
        short_name: `nikoluzzi`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `Nikoluzzi`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
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
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Staatliches`],
        display: "swap",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
