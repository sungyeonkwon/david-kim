import React, { Component } from "react"
import { graphql } from "gatsby"
import { css } from 'linaria';
import { styled } from 'linaria/react'
import Button from '../components/button'

const block = css`
  display: block;
`

const btn = css`
  color:white;
  font-family: "Cochin-Regular";
  font-size:28px;
  float: right;
`

const input = css`
  color:white;
  width:60%;
  font-family: "Cochin-Regular";
  font-size:20px;
  background-color: red;
  margin: 0 0 20px 20px;
  padding: 7px 15px;
  border: none;
  background-color: rgba(255,255,255,0.1);
  @media only screen and (max-width: 1185px) {
    width:100%;
    margin-left: 0px;
  }
`

const Textarea = styled.textarea`
  color:white;
  font-family: "Cochin-Regular";
  font-size:20px;
  resize: none;
  padding: 7px 15px;
  width: 100%;
  border: none;
  height: 300px;
  background-color: rgba(255,255,255,0.1);
  margin-bottom:10px;
  @media only screen and (max-width: 1185px) {
    width:100%;
  }
`
export default class Contact extends Component {

  state = {
  }

  render() {
    const backgroundImage = this.props.data.allContentfulContact.edges[0].node.background.file.url + '?w=1500'
    return (
      <>
        <div className="background-container">
          <img src = {backgroundImage} />
        </div>
        <form 
          className="contact-form"
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
              // placeholder="Name" 
              required
            />
          </label>
          <label>
            Email 
            <input 
              type="email" 
              name="email" 
              className={input}
              // placeholder="Email Address" 
              required
            />
          </label>
          <label className={block}> 
            {/* <span className={block}>Message</span> */}
            <Textarea
              name="message"
              required
            ></Textarea>
          </label>

          <button
            className={btn} 
            type="submit">
            Send Email
          </button>
        </form>
      </>
    )
  }
}

export const query = graphql`
  query {
    allContentfulContact {
      edges {
        node {
          id
          background {
            id
            file {
              url
              fileName
              contentType
            }
          }
          bodytext {
            id
            json
          }
        }
      }
    }
  }
`