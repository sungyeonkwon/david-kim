import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from "../components/layout"

export default ({ data }) => {
  const intro = data.allContentfulBiography.edges[0].node.introtext.json
  const body = data.allContentfulBiography.edges[0].node.bodytext.json

  return (
    <Layout>
    <div className="type-l">{documentToReactComponents(intro)}</div>
    <div className="type-m">{documentToReactComponents(body)}</div>
   </Layout>
  )

}

export const query = graphql`
  query {
    allContentfulBiography {
      edges {
        node {
          id
          introtext {
            id
            json
          }
          bodytext {
            id
            json
          }
        }
      }
    }
  }
`