module.exports = {
  siteMetadata: {
    title: "Kick My Pixel",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/works/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};

