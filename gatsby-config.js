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
        downloadLocal: true,
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
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
        disable: true,
      },
    },
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: true, // Print removed selectors and processed file names
      // develop: true, // Enable while using `gatsby develop`
      tailwind: true, // Enable tailwindcss support
      // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
      // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      purgeCSSOptions: {
        // https://purgecss.com/configuration.html#options
        // safelist: ['safelist'], // Don't remove this selector
      },
    },
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antonin Jech`,
        short_name: `antoninjech`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4B3F72`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
}
