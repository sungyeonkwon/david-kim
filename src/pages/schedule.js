import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from "../components/layout"


export default ({ data }) => {
  const content = data.allContentfulSchedule.edges[0].node.schedule.json

  return (
    <Layout>
    <div className="type-m para-divider">{documentToReactComponents(content)}</div>
   </Layout>
  )

}

export const query = graphql`
  query {
    allContentfulSchedule{
      edges {
        node {
          id
          schedule {
            id
            json
          }
        }
      }
    }
  }
`