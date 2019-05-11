console.log("__dirname", __dirname)

module.exports = {
  siteMetadata: {
    title: `David Hyun-Su Kim`,
    description: `A website of David Hyun-Su Kim`,
    author: `David Hyun-Su Kim`,
  },
  plugins: [
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
    `gatsby-transformer-remark`,
    // `gatsby-plugin-emotion`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
  ],
}