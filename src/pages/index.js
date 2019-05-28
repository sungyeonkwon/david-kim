import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout'
import { styled } from 'linaria/react'
import { FONTSIZE } from '../constants/constants'

const Strapline = styled.div`
  color: white;
  font-size: ${FONTSIZE.large};
  z-index:5;
  width: 90%;
  cursor: pointer;
  text-align:center;
  @media only screen and (max-width: 786px) {
    width: 100%;
  }
`

const StraplineContainer = styled.div`
  display: flex;
  height:90vh;
  width:100%;
  flex-direction:column;
  justify-content:flex-end;
  align-items:center;
  (max-width: 786px) {
    width: 100%;
  }
`

export default ({ data }) => {
  const node = data.allContentfulHome.edges[0].node
  const strapline = node.strapline.json
  const backgroundImage = node.background.file.url + '?w=1000'
  return(
    <Layout>
      <div className="background-container">
        <img src = {backgroundImage} />
      </div>
      <StraplineContainer>
        <Strapline>
          <Link to='/biography/'>
            {documentToReactComponents(strapline)}
          </Link>
        </Strapline>
      </StraplineContainer>
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
            file {
              url
              fileName
              contentType
            }
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
