import React, { Component } from "react"
import { graphql } from "gatsby"
import { css } from 'linaria';
import { styled } from 'linaria/react'
import Button from '../components/button'

const block = css`
  display: block;
`

const input = css`
  color:white;
  width:30%;
  font-family: "Cochin-Regular";
  font-size:20px;
  background-color: red;
  border: none;
  margin: 20px;
  padding: 7px 15px;
  background-color: rgba(255,255,255,0.2);
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
  width: 90%;
  height: 300px;
  background-color: rgba(255,255,255,0.2);
  border: none;
  @media only screen and (max-width: 1185px) {
    width:100%;
  }
`

const Message = styled.div`
  margin-bottom: 70px;
`

export default class Contact extends Component {

  state = {
  }

  render() {
    return (
      <>
        <Message>Your message has been sent successfully.</Message>
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

          <button type="submit">
            <Button type="submit">Submit</Button>
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
          bodytext {
            id
            json
          }
        }
      }
    }
  }
`