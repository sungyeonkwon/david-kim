import React, { Component } from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from "../components/layout"

class Contact extends Component {

  state = {
    content: this.props.data.allContentfulContact.edges[0].node.bodytext.json,
    name: '',
    email: '',
  }

  handleInputChange = e => {
    const target = e.target
    const value = target.value
    const name =  target.name

    console.log("value", value)
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    // e.preventDefault()
    console.log(`hewwwwllo ${this.state.name}`)
  }

  render() {
    return (
      <Layout>
        <form 
          name="contact"
          method="POST"
          onSubmit={this.handleSubmit}
          data-netlify="true" 
        >
          <label>
            Name
            <input 
              type="text" 
              name="name" 
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name" />

          </label>
          <textarea></textarea>
          <button type="submit">Submit</button>
        </form>
        <div>{documentToReactComponents(this.state.content)}</div>
      </Layout>
    )
  }


}


export default Contact

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulContact {
      edges {
        node {
          id
          bodytext {
            id
            json
          }
        }
      }
    }
  }
`