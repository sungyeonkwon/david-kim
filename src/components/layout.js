import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import s from "./layout.module.css"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return(
    <div className={s.container}>
    <header className={s.header}>
      <Link to="/">
        <h3 className={s.logo}>
          {data.site.siteMetadata.title} 
        </h3>
      </Link>
      <ul className={s.ul}>
        <ListLink to="/biography/">Biography</ListLink>
        <ListLink to="/schedule/">Schedule</ListLink>
        <ListLink to="/media/">Media</ListLink>
        <ListLink to="/gallery/">Gallery</ListLink>
        <ListLink to="/research/">Research</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
    </div>
    )
  }


// Home: Text
// Biography: Text
// Concerts: Text
// Media: Audio / Videos
// Gallery: Image thumbnails
// The Brahmsian Hairpin: Audio
// Contact: Text
 

