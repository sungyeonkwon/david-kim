import React, { Component}  from "react"
import { graphql } from "gatsby"
import Arrow from '../components/arrow'


export default class Gallery extends Component {

  state = {
    gallery: this.props.data.allContentfulGallery.edges[0].node.gallery,
    isSlideshow: false,
    selectedImg: '',
    selectedImgIndex: null,
  }

  slideshow = () => {
    return (
      <div
        onClick={(e) => this.onEmptySpaceClick(e.target)} 
        className='slideshow'>
        <div className='inner'>
          <div
            onClick={(e) => this.onArrowClick(e, 'prev')} 
            className='prev' >
              <Arrow direction="left" />
          </div>
            <img 
              className='slide' 
              src={this.state.selectedImg} 
            />
          <div
            onClick={(e) => this.onArrowClick(e, 'next')} 
            className='next' >
              <Arrow direction="right" />
          </div>
        </div>
      </div>
    )
  }
  
  onImageClick = (img, index) => {
    this.setState({ 
      isSlideshow: true, 
      selectedImg: img,
      selectedImgIndex: index,
     })
  }

  rotateIndex = (index, direction) => {
    const n = this.state.gallery.length

    if (direction === 'prev'){
      return index === 0 ? n - 1 : index - 1
    }
    if (direction === 'next'){
      return index === n - 1 ? 0 : index + 1
    }
  }

  onArrowClick = (e, direction) => {
    const newIndex = this.rotateIndex(this.state.selectedImgIndex, direction)
    const newImage = this.state.gallery
      .filter((img, index) => index === newIndex)
      .map(img => img.fluid.src)
    this.setState({ 
      selectedImg: newImage,
      selectedImgIndex: newIndex,
    })
  }

  onEmptySpaceClick = target => {
    const tag = target.tagName.toLowerCase()
    if (tag !== 'span' && tag !== 'svg' && tag !== 'path'){
      this.setState({ isSlideshow: false })
    }
  }

  renderImages = () => {
    const images = this.state.gallery.map( (img, index) => {
      return (
        <img 
          key={index}
          className='gallery-img' 
          src={img.fluid.src} 
          index={index}
          onClick={(e) => this.onImageClick(e.target.src, index)}
          alt={img.title}
        />
      )
    })
    return images
  }

  render() {
    console.log("this.state.isSlideshow", this.state.isSlideshow)
    return (
      <>
      {this.state.isSlideshow? this.slideshow() : (<div className="slideshow hide"></div>) }
      <div className='gallery-container'>
        {this.renderImages()}
      </div>
      </>
    )

  }
}

export const query = graphql`
  query {
    allContentfulGallery {
      edges {
        node {
          id
          title
          gallery {
            fluid {
              src
            }
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
  }
`

