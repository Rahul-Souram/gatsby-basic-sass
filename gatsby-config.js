/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `./.env.${process.env.NODE_ENV}`,
})
const strapiConfig = {
  apiURL:process.env.STRAPI_API_URL,
  accessToken:process.env.STRAPI_TOKEN,
  collectionTypes: ["work-project", "tech-stack", "project"],
  singleTypes: ["homepage", "aboutpage", "global", "workpage", "contactpage"],
}
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Rahul's Portfolio ",
    description:
      "Welcome to the Home page of this portfolio. Explore a showcase of the creator's best work, featuring a variety of projects and achievements. ",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/assets/images/profile.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/Layout/index.js`),
      },
    },
  ],
}
