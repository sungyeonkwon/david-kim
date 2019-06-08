import React, { Component}  from "react"
import { Link } from "gatsby"
// import { css } from 'linaria';
import { styled } from 'linaria/react'

const ListLink = props => (
  <li className={props.cls}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default class Layout extends Component {

  state = {
    biography: ['list-item'], 
    calendar: ['list-item'],
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

    const allPages = ['biography', 'calendar', 'media', 'gallery', 'research', 'contact']

    // Click on logo 
    if (e.target.className === 'logo'){
      this.setState({
        currPage: 'index',
        showMobileMenu: false,
      }, () => allPages.map(item => {
        this.setState({[item]: ['list-item']})
      }))

    }

    const page = e.target.textContent.toLowerCase()
    const inactivePages = allPages.filter(item => item !== page)

    // Click on other pages
    if (e.target.tagName === 'A') {
      this.setState({
        currPage: page,
        [page]: ['list-item', 'active'],
        mobileMenu: ['menu'],
        background: ['background'],
        showMobileMenu: false,
      }, () => inactivePages.map(item => {
          this.setState({[item]: ['list-item']})
        }))
    } else {
      this.handleMobileMenu()
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
    const pageName = this.props.location.pathname.replace(/\//g, '')

    return(
      <div className={`wrapper ${pageName}`}>
        <div className="mobile-bar">
          <header className='header'>
            <span className='logo-container'>
              <Link 
                onClick={this.handleClick}
                className='logo' to="/">David Hyun-Su Kim</Link><br/><br/>
            </span>
            <div 
              onClick={this.handleMobileMenu}
              className={this.state.background.join(' ')} />
            <ul
              onMouseOver={this.handleMouseOver} 
              onMouseOut={this.handleMouseOut}
              onClick={this.handleClick}
              className={this.state.mobileMenu.join(' ')}>
              <ListLink cls={this.state.biography.join(' ')} to="/biography/">Biography</ListLink>
              <ListLink cls={this.state.calendar.join(' ')} to="/calendar/">Calendar</ListLink>
              <ListLink cls={this.state.media.join(' ')} to="/media/">Media</ListLink>
              <ListLink cls={this.state.gallery.join(' ')} to="/gallery/">Gallery</ListLink>
              <ListLink cls={this.state.research.join(' ')} to="/research/">Research</ListLink>
              <ListLink cls={this.state.contact.join(' ')} to="/contact/">Contact</ListLink>
            </ul>
          </header>
          <span 
            onClick={this.handleMobileMenu}
            className='hamburger'>
              <a>Menu</a>
          </span>
        </div>
        <div className='container'>
        {this.props.children}
        </div>
      </div>
    )
  }
}

