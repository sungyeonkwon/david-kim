import React from "react"
import { graphql } from "gatsby"
import s from "./biography.module.css"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>{ data.site.siteMetadata.title }</h1>
    <p className={s.body}>This is going to be biography</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`