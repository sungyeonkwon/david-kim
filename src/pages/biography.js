import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from 'linaria';

const portrait = css`
  width: 90%;
  margin: 10px 0 40px 0;
`

export default ({ data }) => {

  const intro = data.allContentfulBiography.edges[0].node.introtext.json
  const body = data.allContentfulBiography.edges[0].node.bodytext.json
  const backgroundImage = data.allContentfulBiography.edges[0].node.background.file.url + '?w=1500'
  const img = `${data.allContentfulBiography.edges[0].node.portrait.file.url}?w=1000`

  return (
    <>
      {/* <div className="background-container">
        <img src = {backgroundImage} />
      </div> */}
      <div className="type-m">{documentToReactComponents(intro)}</div>
      <img 
        className={portrait}
        src={img} 
      />
      <div className="type-s">{documentToReactComponents(body)}</div>
   </>
  )

}

export const query = graphql`
  query {
    allContentfulBiography {
      edges {
        node {
          id
          background {
            id
            file {
              url
              fileName
              contentType
            }
          }
          portrait {
            file {
              url
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