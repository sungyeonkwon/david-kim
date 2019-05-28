import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from 'linaria';
import Layout from "../components/layout"
import { RED, BLUE } from "../constants/constants"

const portrait = css`
  width: 90%;
  margin: 10px 0 40px 0;

`

export default ({ data }) => {
  const intro = data.allContentfulBiography.edges[0].node.introtext.json
  const body = data.allContentfulBiography.edges[0].node.bodytext.json
  const img = data.allContentfulBiography.edges[0].node.portrait.fluid.src

  return (
    <Layout>
    <div className="type-m">{documentToReactComponents(intro)}</div>
    <img 
      className={portrait}
      src={img} 
    />
    <div className="type-s">{documentToReactComponents(body)}</div>
   </Layout>
  )

}

export const query = graphql`
  query {
    allContentfulBiography {
      edges {
        node {
          id
          portrait {
            fluid {
              src
            }
          }
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