import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout'
import { styled } from 'linaria/react'
import { FONTSIZE } from '../constants/constants'

const Strapline = styled.div`
  color: white;
  font-size: ${FONTSIZE.large};
`

export default ({ data }) => {
  const node = data.allContentfulHome.edges[0].node
  const strapline = node.strapline.json
  const backgroundImage = node.background.fluid.src
  return(
    <Layout>
      <div className="background-container">
        <img src = {backgroundImage} />
      </div>
      <Strapline>
        {documentToReactComponents(strapline)}
      </Strapline>
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
