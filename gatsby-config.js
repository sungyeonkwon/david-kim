console.log("__dirname", __dirname)

module.exports = {
  siteMetadata: {
    title: `David Hyun-Su Kim`,
    description: `A website of David Hyun-Su Kim`,
    author: `David Hyun-Su Kim`,
  },
  plugins: [
    `gatsby-transformer-remark`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Hyun-Su Kim`,
        short_name: `David Hyun-Su Kim`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `standalone`,
        icon: `src/icons/favicon.png`
      },
    },
  ],
}