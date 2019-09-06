module.exports = {
  siteMetadata: {
    hireLink: 'https://astrocoders.com/#hireUs',
    bugLink: 'https://github.com/Astrocoders/universe-landing/issues',
    githubLink: 'https://github.com/Astrocoders/universe-landing',
    weAreHiringLink: 'https://astrocoders.com/join-us'
  },

  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Universe`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Universe",
        short_name: "Universe",
        background_color: "#e5e5e5",
        theme_color: "#8773e3",
        description: "Find ReasonML bulletproof bindings",
        display: "minimal-ui",
        icon: "src/images/astro-logo-micro.png"
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\: 300,400,700`],
      },
    },
  ],
}
