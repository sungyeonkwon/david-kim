import React from "react"
import { graphql } from "gatsby"
import { styled } from 'linaria/react'

const Heading = styled.h3`
  maragin-bottom: 0;
  font-size:28px;
  border-top: 1px solid white;
  padding-top: 10px;
`

const Item = styled.h3`
  maragin-bottom: 30px;
`


export default ({ data }) => {

  const edges = data.allContentfulMedia.edges
  const mediaItems = edges.map( edge => {
    const audios = edge.node.audios.map( obj => {
      return(
      <Item>
        <Heading>{obj.title}</Heading>
        <p>{obj.description}</p>
        <audio key={obj.id} src={obj.file.url} controls/>
      </Item>
      )
    })

    return(
      <>
        <h1>{edge.node.title}</h1>
        {audios}
      </>
    )
  })

  return (
    <>
      {mediaItems}
    </>
  )
}

export const query = graphql`
  query {
    allContentfulMedia {
      edges {
        node {
          id
          title
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

