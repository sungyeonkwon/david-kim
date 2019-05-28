import React, { Component}  from "react"
import { Link } from "gatsby"
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
    showMobileMenu: false,
    mobileMenu: ['menu'],
    background: ['background'],

  }

  handleMouseOver = e => {
    const page = e.target.textContent.toLowerCase()
    if (e.target.tagName === 'A') {
      console.log("insdie of handleMouseOver")
      this.setState({
        [page]: ['list-item', 'active']
      })
    }
  }

  handleMouseOut = e => {
    const page = e.target.textContent.toLowerCase()
    if (e.target.tagName === 'A' && page !== this.state.currPage) {
      this.setState({
        [page]: ['list-item']
      })
    }
  }

  handleClick = e => {
    const page = e.target.textContent.toLowerCase()
    if (e.target.tagName === 'A') {
      this.setState({
        [page]: ['list-item', 'active'],
        currPage: page,
      })
    }
  }

  handleMobileMenu = e => {
    if (!this.state.showMobileMenu){
      this.setState({
        showMobileMenu: !this.state.showMobileMenu,
        mobileMenu: ['menu', 'show'],
        background: ['background', 'extend'],
      })
    } else {
      this.setState({
        showMobileMenu: !this.state.showMobileMenu,
        mobileMenu: ['menu'],
        background: ['background'],
      })
    }

  }

  render() {
    console.log(this.state.currPage)
    console.log("background>>", this.state.background.join(' '))
    return(
      <div className='wrapper'>
        <header className='header'>
          <span className='logo-container'>
            <Link className='logo' to="/">David Hyun-Su Kim</Link><br/><br/>
          </span>
          <div className={this.state.background.join(' ')} />
          <ul
            onMouseOver={this.handleMouseOver} 
            onMouseOut={this.handleMouseOut}
            onClick={this.handleClick}
            className={this.state.mobileMenu.join(' ')}>
            <ListLink cls={this.state.biography.join(' ')} to="/biography/">Biography</ListLink>
            <ListLink cls={this.state.schedule.join(' ')} to="/schedule/">Schedule</ListLink>
            <ListLink cls={this.state.media.join(' ')} to="/media/">Media</ListLink>
            <ListLink cls={this.state.gallery.join(' ')} to="/gallery/">Gallery</ListLink>
            <ListLink cls={this.state.research.join(' ')} to="/research/">Research</ListLink>
            <ListLink cls={this.state.contact.join(' ')} to="/contact/">Contact</ListLink>
          </ul>
        </header>
        <span 
          onClick={this.handleMobileMenu}
          className='hamburger'><span>Menu</span></span>
        <div className='container'>
        {this.props.children}
        </div>
      </div>
    )
  }
}

