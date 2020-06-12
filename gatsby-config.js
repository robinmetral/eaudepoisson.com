require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Eau de poisson`,
    description: ``,
    author: `Clara & Robin`,
    siteUrl: `https://www.eaudepoisson.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: process.env.MATOMO_SITE_ID,
        matomoUrl: process.env.MATOMO_URL,
        siteUrl: process.env.SITE_URL,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve("./src/components/PostsLayout"),
          default: require.resolve("./src/components/PostsLayout"),
        },
      },
    },
    {
      resolve: `@robinmetral/gatsby-source-s3`,
      options: {
        aws: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID_,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_,
          region: process.env.AWS_REGION_,
        },
        buckets: ["eaudepoisson-legacy", "eaudepoisson-public"],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eau de poisson`,
        short_name: `edp`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/eaudepoisson-logo.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
