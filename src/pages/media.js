import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from "../components/layout"


export default ({ data }) => {

  const edges = data.allContentfulMedia.edges
  let audioUrl;
  // if (edges.length > 0) {
    const mediaItems = edges.map( edge => {
      const audios = edge.node.audios.map( obj => {
        return(
        <>
          <h3>{obj.title}</h3>
          <p>{obj.description}</p>
          <audio key={obj.id} src={obj.file.url} controls/>
        </>
        )
      })

      return(
        <>
          <h1>{edge.node.title}</h1>
          <p className="para-divider">{documentToReactComponents(edge.node.description.json)}</p>
          {audios}
        </>
      )
    })
  // }

  return (
    <Layout>
      {mediaItems}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulMedia {
      edges {
        node {
          id
          title
          description {
            id
            json
          }
          audios {
            id
            title
            description
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

