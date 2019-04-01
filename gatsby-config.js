module.exports = {
  siteMetadata: {
    title: `Brooke Mccord | Digital Editor of The Face | Writer | Creative Consultant`,
    description: `Brooke McCord is a London-based writer, editor, and consultant, working across fashion and contemporary culture who has contributed to Dazed & Confused, i-D, Office, The Guardian, Dazed Beauty, LOVE, Wonderland and AnOther. As a digital native, Brooke has translated her knowledge and understanding of digital behaviour to strategy and content projects for the likes of adidas Originals, Nike, Liberty of London, Floom, Glossier, The Body Shop, Flannels, Matches, 3INA, Ace & Tate and Topshop.`,
    author: `@jacksndrs`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
