module.exports = {
  siteMetadata: {
    hireLink: '#',
    bugLink: '#',
    githubLink: '#',
  },

  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\: 300,400,700`],
      },
    },
  ],
}
