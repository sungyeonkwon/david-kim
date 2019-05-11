import React from "react"
import { graphql } from "gatsby"
import s from "./biography.module.css"
import Layout from "../components/layout"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default ({ data }) => {
  const content = data.allContentfulBiography.edges[0].node.bodytext.json
  console.log(content)

  return (
    <Layout>
    <h1>{ data.site.siteMetadata.title }</h1>
    <div className={s.body}>This is going to be biography: {documentToReactComponents(content)}</div>
   </Layout>
  )

}

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `


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
          slug
          bodytext {
            id
            json
          }
        }
      }
    }
  }
`

