require("dotenv").config()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    menu: [
      { name: "Home", to: "#home", spy: "home" },
      { name: "About me", to: "#aboutme", spy: "aboutme" },
      { name: "My work", to: "#mywork", spy: "mywork" },
      { name: "Contact me", to: "#contactme", spy: "contactme" },
    ],
    links: {
      dribbble: "https://www.facebook.com/",
      behance: "https://www.instagram.com/",
      linkedin: "https://pinterest.com/",
      github: "https://twitter.com/",
    },
    locale: "en",
    title: `Antonin Jech`,
    description: `UX Designer & Front-end Developer`,
    author: `@antoninjech`,
    siteUrl: `https://stellarcodemaster.gtsb.io`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-less`,
    {
    resolve: `gatsby-plugin-sharp`,
    options: {
      // Set to false to allow builds to continue on image errors
      failOnError: false,
    },
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antonin Jech`,
        short_name: `antoninjech`,
        start_url: `/`,
        background_color: `#121229`,
        theme_color: `#1F2041`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
