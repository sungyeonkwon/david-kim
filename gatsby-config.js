module.exports = {
  siteMetadata: {
    title: `David Hyun-Su Kim`,
    description: `A website of David Hyun-Su Kim`,
    author: `David Hyun-Su Kim`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    // `gatsby-plugin-image`,
    // `gatsby-plugin-sharp`,
    `gatsby-plugin-linaria`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `gevn6kkbxdjd`,
        accessToken: `BRthMu_2OI-qjDau180hxFWGMaCSVMZFlar9bWFHa7Y`
      }
    },
  ],
}