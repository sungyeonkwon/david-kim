import React from "react"
import { graphql } from "gatsby"
import { styled } from 'linaria/react'

const Heading = styled.h3`
  maragin-bottom: 0;
  border-top: 1px solid white;
  padding-top: 10px;
`

const Item = styled.h3`
  maragin-bottom: 30px;
`


export default ({ data }) => {

  const edges = data.allContentfulMedia.edges
  const backgroundImage = edges[0].node.background.file.url + '?w=1500'
  const mediaItems = edges.map( edge => {
    const audios = edge.node.audios.map( obj => {

      let i = obj.title.indexOf('opus')
      const title = obj.title.slice(0, i)
      const subtitle = obj.title.slice(i-1)

      return(
      <Item>
        <Heading>{title}<br/>{subtitle}</Heading>
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
      <div className="background-container">
        <img src = {backgroundImage} />
      </div>
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
          background {
            id
            file {
              url
              fileName
              contentType
            }
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

