import React from "react"
import { graphql } from "gatsby"
import styles from "./calendar.module.css"

export default ({ data }) => {
  
  const concerts = data.allContentfulCalendar.edges[0].node.concerts.childMarkdownRemark.html
  const backgroundImage = data.allContentfulCalendar.edges[0].node.background.file.url + '?w=1500'

  const createMarkup = () => {
    return {__html: concerts};
  }

  return (
    <>
      <div className="background-container">
        <img src = {backgroundImage} />
      </div>
      <h1>Concerts</h1>
        <div className={styles.grid}
             dangerouslySetInnerHTML={createMarkup()}></div>
    </>
  )

}

export const query = graphql`
  query {
    allContentfulCalendar{
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
          concerts {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`