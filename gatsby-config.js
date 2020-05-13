const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Henning Ofstad`,
    description: `Henning Ofstad - Full stack software engineer from Norway.`,
    author: `Henning Ofstad`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-antd',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Henning Ofstad`,
        short_name: `H. Ofstad`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#303030`,
        display: `minimal-ui`,
        icon: `src/images/logo-cloud.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        constants: path.join(__dirname, 'src/constants'),
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        images: path.join(__dirname, 'src/images'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
    'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
