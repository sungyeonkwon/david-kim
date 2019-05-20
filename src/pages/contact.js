import React, { Component } from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from 'linaria';
import Layout from "../components/layout"



const input = css`
  background-color: red;
  border: none;
  margin-left: 20px;
  background-color: rgba(255,255,255,0.3);
`

const textarea = css`
  resize: none;
  width: 90%;
  height: 300px;
  background-color: rgba(255,255,255,0.3);
  border: none;
`
class Contact extends Component {

  state = {
    content: this.props.data.allContentfulContact.edges[0].node.bodytext.json,
  }

  render() {
    return (
      <Layout>
        <div>{documentToReactComponents(this.state.content)}</div>
        <form 
          name="contact-form"
          method="POST"
          action="/success"
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <label>
            Name
            <input 
              type="text" 
              name="name" 
              className={input}
              placeholder="Name" 
              required
            />
          </label>
          <label>
            Email 
            <input 
              type="email" 
              name="email" 
              className={input}
              placeholder="Email Address" 
              required
            />
          </label>
          <label> 
            Message
            <textarea
              name="message"
              className={textarea}
              required
            ></textarea>
          </label>

          <button type="submit">Submit</button>
        </form>
      </Layout>
    )
  }
}


export default Contact

export const query = graphql`
  query {
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