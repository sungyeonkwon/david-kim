import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from "../components/layout"

export default ({ data }) => {
  console.log("contact data", data)
  const content = data.allContentfulContact.edges[0].node.bodytext.json
  return (
    <Layout>
      this is a success page
    <div>{documentToReactComponents(content)}</div>
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
    allContentfulContact {
      edges {
        node {
          id
          bodytext {
            id
            json
          }
        }
      }
    }
  }
`