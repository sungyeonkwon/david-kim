import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from 'linaria';
import Layout from "../components/layout"

const eventContainer = css`
  border-top: 1px solid white;
  padding-top: 20px;
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
      <div className={eventContainer}>
        <div className="date">{formatDate(datetime)}</div>
        <div className="type-m event">{documentToReactComponents(text)}</div>
      </div>
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
      {upcomingEvents}
      <h1>Past</h1>
      {pastEvents}
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