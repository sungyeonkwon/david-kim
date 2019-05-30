import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { styled } from 'linaria/react'

import { POINT } from "../constants/constants"
import { formatDate } from '../constants/helpers'
import { isFuture } from '../constants/helpers'


const UpcomingEventContainer = styled.div`
  border-top: 1px solid white;
  padding: 12px 0;
  margin-bottom:60px;

`
const PastEventContainer = styled.div`
  border-top: 1px solid white;
  padding: 12px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  justify-content: space-between;
  justify-items: flex-start;
  align-items: flex-start;
  margin-bottom:60px;

  @media only screen and (max-width: 1185px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`

const Datetime = styled.h3`
  color: ${POINT};
`

const Subheading = styled.h1`
  margin: 12px 0 0 0;
`

const ItemRow = styled.div`
  grid-column: 1 / 4;
  @media only screen and (max-width: 1185px) {
    grid-column: 1 / 3;
  }
  @media only screen and (max-width: 786px) {
    grid-column: 1 / 2;
  }
`

const yearCache = []

export default ({ data }) => {
  
  const items = data.allContentfulSchedule.edges

  const renderEvent = (item, showYear = false, i) => {
    const datetime = new Date(item.node.datetime)
    const text = item.node.schedule.json
    const year = datetime.getFullYear()
    var yearTitle; 

    if (!yearCache.includes(year)){
      yearTitle = <Subheading>{year}</Subheading>
      yearCache.push(year)
    }
    
    return (
      <>
      { yearTitle ? <ItemRow>{yearTitle}</ItemRow> : null }
      <div>
        <Datetime>{formatDate(datetime)}</Datetime>
        <div className="type-xs event">{documentToReactComponents(text)}</div>
      </div>
      </>
    )  
  }

  const upcomingEvents = items
    .filter( item => isFuture(item.node.datetime))
    .map( item => renderEvent(item) )

  const pastEvents = items
    .filter( item => !isFuture(item.node.datetime))
    .map( (item, i) => renderEvent(item, true, i) )

  return (
    <>
      <h1>Upcoming</h1>
      <UpcomingEventContainer>{upcomingEvents}</UpcomingEventContainer>
      <h1>Past</h1>
      <PastEventContainer>{pastEvents}</PastEventContainer>
    </>
  )

}

export const query = graphql`
  query {
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
  }
`