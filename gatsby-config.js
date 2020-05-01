/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

//  const config = require('./config/metadata')

module.exports = {
  siteMetadata: {
    title: `Gustavo Luigi Brancacio | Front-end Developer`,
    siteUrl: `https://gluigi.dev`,
    author: `Gustavo Luigi Brancacio`,
    description: `Gustavo Luigi Brancacio - Especialista em desenvolvimento front-end`,
    social: [
      {
        name: `github`,
        url: `https://github.com/gustavoluigi`,
      },

      {
        name: `instagram`,
        url: `https://instagram.com/gluigi.dev`
      },

      {
        name: `facebook`,
        url: `https://facebook.com/gluigi.dev`
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gustavo Luigi Brancacio | Front-end Developer`,
        short_name: `gluigi.dev`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#4169FA`,
        display: `standalone`,
        // icon: `/src/assets (512x512)`
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `http://www.gluigi.dev`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#4169FA`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `500`, `700`]
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },

    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },

    `gatsby-plugin-offline`,
  ],
}
