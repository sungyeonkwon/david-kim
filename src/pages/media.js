import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
  console.log(data)

  return (
    <Layout>
    <h1>Media</h1>
    <p>
      audio video etc
    </p>
  </Layout>
  )
}


