import React, { Component}  from "react"
import { Link } from "gatsby"
import s from "./layout.module.css"
// import { css } from 'linaria';
// import { styled } from 'linaria/react'

const ListLink = props => (
  <li className={props.cls}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default class Layout extends Component {

  state = {
    currPage: '',
    biography: ['list-item'], 
    schedule: ['list-item'],
    media: ['list-item'],
    gallery: ['list-item'],
    research: ['list-item'],
    contact: ['list-item'],
  }

  handleMouseOver = e => {
    const page = e.target.textContent.toLowerCase()
    if (e.target.tagName === 'A' && page !== 'david hyun-su kim') {
      console.log("insdie of handleMouseOver")
      this.setState({
        [page]: ['list-item', 'active']
      })
    }
  }

  handleMouseOut = e => {
    const page = e.target.textContent.toLowerCase()
    if (e.target.tagName === 'A' && page !== 'david hyun-su kim' && page !== this.state.currPage) {
      this.setState({
        [page]: ['list-item']
      })
    }
  }

  handleClick = e => {
    const page = e.target.textContent.toLowerCase()
    if (e.target.tagName === 'A' && page !== 'david hyun-su kim') {
      this.setState({
        [page]: ['list-item', 'active'],
        currPage: page,
      })
    }
  }

  render() {
    console.log(this.state.currPage)
    console.log("DIG", this.props)
    // console.log("path", this.props.location.pathname)
    return(
      <div className={s.wrapper}>
        <header className={s.header}>
          <div className={s.background} />
          <ul
            onMouseOver={this.handleMouseOver} 
            onMouseOut={this.handleMouseOut}
            onClick={this.handleClick}
            className={s.ul}>
            <ListLink to="/">David Hyun-Su Kim</ListLink><br/><br/>
            <ListLink cls={this.state.biography.join(' ')} to="/biography/">Biography</ListLink>
            <ListLink cls={this.state.schedule.join(' ')} to="/schedule/">Schedule</ListLink>
            <ListLink cls={this.state.media.join(' ')} to="/media/">Media</ListLink>
            <ListLink cls={this.state.gallery.join(' ')} to="/gallery/">Gallery</ListLink>
            <ListLink cls={this.state.research.join(' ')} to="/research/">Research</ListLink>
            <ListLink cls={this.state.contact.join(' ')} to="/contact/">Contact</ListLink>
          </ul>
        </header>
        <div className={s.container}>
        {this.props.children}
        </div>
      </div>
    )
  }
}

