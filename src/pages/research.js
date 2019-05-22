import React from "react"
import Layout from "../components/layout"
import { css } from 'linaria'
import { styled } from 'linaria/react'

const Row = styled.div`
  background-color: pink;
  border-top: 1px solid white;
  width:100%;
  height:70px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`
const Subheading = styled.div`
  font-size: 18px;
`

const Number = styled.div`
  background-color: red;
  width: 15%;
`
const Title = styled.div`
  background-color: blue;
  width: 66%;
`
const Download = styled.div`
  background-color: green;
  width: 20%;
`

export default () => {
 return (
    <Layout>
      <h1>CD Tracks for “The Brahmsian Hairpin” in 19th-Century Music, Summer 2012</h1>
      <h3>CD Tracks</h3>
      <Row>
        <Number>1.</Number>
        <Title>
        Johannes Brahms performing his Ungarischer Tanz no. 1 in G minor.
        Cylinder digitally remastered by Jonathan Berger.<br></br>
        <audio src={'01-brahms-speaking-and-playing.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>2.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>3.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>4.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>5.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>6.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>7.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>

      <Subheading>
      Excerpts from Fanny Davies and Adelina de Lara performing Schumann Kinderszenen, opus 15. The Pupils of Clara Schumann. Pearl Gemm CDs 1, 4
      </Subheading>

      <Row>
        <Number>8.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>9.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>10.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>11.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>12.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>13.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>14.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>15.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>16.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>17.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>

      <Subheading>
      Supplementary examples
      </Subheading>

      <Row>
        <Number>18.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>19.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>20.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>21.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>22.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>23.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>24.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>25.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>26.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>27.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>28.</Number>
        <Title>Title</Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
    </Layout>
  )
}

