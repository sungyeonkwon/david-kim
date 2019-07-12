import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { styled } from 'linaria/react'
import styles from "./calendar.module.css"

import { POINT } from "../constants/constants"
import { formatDate } from '../constants/helpers'
import { isFuture } from '../constants/helpers'


// const PastEventContainer = styled.div`
//   border-top: 1px solid white;
//   padding: 12px 0;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-column-gap: 50px;
//   grid-row-gap: 20px;
//   justify-content: space-between;
//   justify-items: flex-start;
//   align-items: flex-start;
//   margin-bottom:60px;

//   @media only screen and (max-width: 1185px) {
//     grid-template-columns: 1fr 1fr;
//   }
//   @media only screen and (max-width: 786px) {
//     grid-template-columns: 1fr;
//   }
// `

// const Datetime = styled.h3`
//   color: ${POINT};
// `

// const Subheading = styled.h1`
//   margin: 12px 0 0 0;
// `

// const ItemRow = styled.div`
//   grid-column: 1 / 4;
//   @media only screen and (max-width: 1185px) {
//     grid-column: 1 / 3;
//   }
//   @media only screen and (max-width: 786px) {
//     grid-column: 1 / 2;
//   }
// `

const yearCache = []

export default ({ data }) => {
  console.log("styles", styles)
  
  const items = data.allContentfulSchedule.edges
  const calendarBody = data.allContentfulCalendar.edges[0].node.bodytext.json

  // const renderEvent = (item, showYear = false, i) => {
  //   const datetime = new Date(item.node.datetime)
  //   const text = item.node.schedule.json
  //   const year = datetime.getFullYear()
  //   var yearTitle; 

  //   if (!yearCache.includes(year)){
  //     yearTitle = <Subheading>{year}</Subheading>
  //     yearCache.push(year)
  //   }
    
  //   return (
  //     <>
  //     {/* { yearTitle ? <ItemRow>{yearTitle}</ItemRow> : null } */}
  //     <div>
  //       <Datetime>{formatDate(datetime)}</Datetime>
  //       <div className="type-xs event">{documentToReactComponents(text)}</div>
  //     </div>
  //     </>
  //   )  
  // }

  // const upcomingEvents = items
  //   .filter( item => isFuture(item.node.datetime))
  //   .map( item => renderEvent(item) )

  // const pastEvents = items
  //   .sort( (a, b) => new Date(a.node.datetime) - new Date(b.node.datetime)).reverse()
  //   .filter( item => !isFuture(item.node.datetime))
  //   .map( (item, i) => renderEvent(item, true, i) )

  const backgroundImage = data.allContentfulScheduleBackground.edges[0].node.background.file.url + '?w=1500'

  return (
    <>
      <div className="background-container">
        <img src = {backgroundImage} />
      </div>
      <h1>Concerts</h1>
      
      <div className={styles.grid}>{documentToReactComponents(calendarBody)}</div>
    </>
  )

}

export const query = graphql`
  query {
    allContentfulScheduleBackground{
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
        }
      }
    }
    allContentfulSchedule{
      edges {
        node {
          id
          datetime
          schedule {
            id
            json
          }
        }
      }
    }
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
          bodytext {
            id
            json
          }
        }
      }
    }
  }
`