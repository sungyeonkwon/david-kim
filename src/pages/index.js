import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from "../components/layout"

export default ({ data }) => {
  const node = data.allContentfulHome.edges[0].node
  const strapline = node.strapline.json
  const backgroundImage = node.background.fluid.src
  console.log("node", strapline)
  return(
    <Layout>
      <div className="background-container">
        <img src = {backgroundImage} />
      </div>
      <p className="type-white type-xl">
        {documentToReactComponents(strapline)}
      </p>
    </Layout>
  )
}


export const query = graphql`
  query {
    allContentfulHome {
      edges {
        node {
          title
          background {
            id
            fluid {
              src
            }
          }
          strapline {
            id
            json
          }
          id
        }
      }
    }
  }
`
