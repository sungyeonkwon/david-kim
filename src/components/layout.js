import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import s from "./layout.module.css"


const ListLink = props => (
  <li style={{ marginRight: `1rem` }}>
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
    <div className={s.wrapper}>
      <header className={s.header}>
        <div className={s.background} />
        <ul className={s.ul}>
          <ListLink to="/">{data.site.siteMetadata.title}</ListLink><br/>
          <ListLink to="/biography/">Biography</ListLink>
          <ListLink to="/schedule/">Schedule</ListLink>
          <ListLink to="/media/">Media</ListLink>
          <ListLink to="/gallery/">Gallery</ListLink>
          <ListLink to="/research/">Research</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <div className={s.container}>
      {children}
      </div>
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
 

