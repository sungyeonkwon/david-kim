import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
  const gallery = data.allContentfulGallery.edges[0].node.gallery
  const images = gallery.map( item => {
    console.log(item.fluid.src)

    return (
      <img src={item.fluid.src} />
    )
  })
  
  return (
    <Layout>
      <h1>Gallery</h1>
      <p>
       {images}
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulGallery {
      edges {
        node {
          id
          title
          gallery {
            fluid {
              src
            }
            id
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`

