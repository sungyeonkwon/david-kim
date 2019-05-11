import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import s from "./biography.module.css"
import Layout from "../components/layout"


export default ({ data }) => {
  const content = data.allContentfulBiography.edges[0].node.bodytext.json
  console.log(content)

  return (
    <Layout>
    <div className={s.body}>{documentToReactComponents(content)}</div>
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
    allContentfulBiography {
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