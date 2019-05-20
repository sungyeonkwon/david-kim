import React, { Component}  from "react"
import { graphql } from "gatsby"
import s from "./gallery.module.css"
import Layout from "../components/layout"


class Gallery extends Component {

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
        className={s.slideshow}>
        <div className={s.inner}>
        <span
          onClick={(e) => this.onArrowClick('prev')} 
          className={s.prev} 
        />
          <img 
            className={s.slide} 
            src={this.state.selectedImg} 
          />
        <span 
          onClick={(e) => this.onArrowClick('next')} 
          className={s.next} 
        />
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

  onArrowClick = direction => {
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
    if (target.tagName !== 'SPAN' && target.tagName !== 'IMG'){
      this.setState({ isSlideshow: false })
    }
  }

  renderImages = () => {
    const images = this.state.gallery.map( (img, index) => {
      return (
        <img 
          key={index}
          className={s.img} 
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
    console.log("this", this)
    return (
      <Layout>
      {this.state.isSlideshow? this.slideshow() : null }
      <div className={s.container}>
        {this.renderImages()}
      </div>
    </Layout>
    )

  }
}

export default Gallery

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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

