import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from 'linaria';
import { styled } from 'linaria/react'

import Layout from "../components/layout"
import { POINT } from "../constants/constants"


const UpcomingEventContainer = styled.div`
  border-top: 1px solid white;
  padding: 12px 0;
`
// TODO: 2 coloumn grid
const PastEventContainer = styled.div`
  border-top: 1px solid white;
  padding: 12px 0;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 50px;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
`

const Datetime = styled.div`
  margin-bottom: 15px;
  color: ${POINT}
`

const formatDate = date => {
  const MONTH_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  let hour = date.getHours();
  let mins = date.getMinutes();

  // Add trailing zero to time
  hour = hour < 10 ? '0' + hour : hour;
  mins = mins < 10 ? '0' + mins : mins;

  return `${day} ${month} ${year} ${hour}:${mins}`;
};

export default ({ data }) => {
  
  const items = data.allContentfulSchedule.edges

  const isUpcoming = t => {
    const today = new Date()
    const event = new Date(t)
    return event > today
  }

  const renderEvent = item => {
    const datetime = new Date(item.node.datetime)
    const text = item.node.schedule.json
    return (
      <>
        <Datetime>{formatDate(datetime)}</Datetime>
        <p className="type-s event">{documentToReactComponents(text)}</p>
      </>
    )  
  }

  const upcomingEvents = items
    .filter( item => isUpcoming(item.node.datetime))
    .map( item => renderEvent(item) )

  const pastEvents = items
    .filter( item => !isUpcoming(item.node.datetime))
    .map( item => renderEvent(item) )

  return (
    <Layout>
      <h1>Upcoming</h1>
      <UpcomingEventContainer>{upcomingEvents}</UpcomingEventContainer>
      <h1>Past</h1>
      <PastEventContainer>{pastEvents}</PastEventContainer>
    </Layout>
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