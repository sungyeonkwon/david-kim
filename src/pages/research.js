import React from "react"
import Layout from "../components/layout"
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
      <h1>CD Tracks for “The Brahmsian Hairpin” in <em>19th-Century Music</em>, Summer 2012</h1>
      <h3>CD Tracks</h3>
      <Row>
        <Number>1.</Number>
        <Title>
        <span className="title">Johannes Brahms performing his Ungarischer Tanz no. 1 in G minor.</span>
        <span className="des">Cylinder digitally remastered by Jonathan Berger.</span>
        <audio src={'01-brahms-speaking-and-playing.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>2.</Number>
        <Title>
        <span className="title">Joseph Joachim performing his Romance in C.</span>
        <span className="des">The Great Violinists, Testament, CD 1.</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>3.</Number>
        <Title>
        <span className="title">Ilona Eibenschütz performing Brahms Waltzes, opus 39, nos. 2 and 15.</span>
        <span className="des">The Pupils of Clara Schumann. Pearl Gemm CD 6</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>4.</Number>
        <Title>
        <span className="title">Ilona Eibenschütz performing Brahms Waltz, opus 39, no. 15.</span>
        <span className="des">The Pupils of Clara Schumann. Pearl Gemm CD 6</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>5.</Number>
        <Title>
        <span className="title">Ilona Eibenschütz performing Brahms Intermezzo, opus 119, no. 2.</span>
        <span className="des">Recorded for G&T 1903, The Pupils of Clara Schumann. Pearl Gemm CD 6</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>6.</Number>
        <Title>
        <span className="title">Etelka Freund performing Brahms Capriccio, opus 76, no. 1.</span>
        <span className="des">Etelka Freund, Pearl, CD 2</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>7.</Number>
        <Title>
        <span className="title">Etelka Freund performing Brahms Variations on a Theme of Händel, opus 24, variation 20.</span>
        <span className="des">Etelka Freund, Pearl, CD 1</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>

      <Subheading>
      Excerpts from Fanny Davies and Adelina de Lara performing Schumann Kinderszenen, opus 15. The Pupils of Clara Schumann. Pearl Gemm CDs 1, 4
      </Subheading>

      <Row>
        <Number>8.</Number>
        <Title>
        <span className="title">Fanny Davies, movement 2, Kuriose Geschichte</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>9.</Number>
        <Title>
        <span className="title">Adelina de Lara, movement 2, Kuriose Geschichte</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>10.</Number>
        <Title>
        <span className="title">Fanny Davies, movement 4, Bittendes Kind</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>11.</Number>
        <Title>
        <span className="title">Adelina de Lara, movement 4, Bittendes Kind </span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>12.</Number>
        <Title>
        <span className="title">Fanny Davies, movement 5, Glückes genug</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>13.</Number>
        <Title>
        <span className="title">Adelina de Lara, movement 5, Glückes genug</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>14.</Number>
        <Title>
        <span className="title">Fanny Davies, movement 11, Fürchtenmachen</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>15.</Number>
        <Title>
        <span className="title">Adelina de Lara, movement 11, Fürchtenmachen</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>16.</Number>
        <Title>
        <span className="title">Fanny Davies, movement 10, Fast zu ernst</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>17.</Number>
        <Title>
        <span className="title">Adelina de Lara, movement 10, Fast zu ernst </span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>

      <Subheading>
      Supplementary examples
      </Subheading>

      <Row>
        <Number>18.</Number>
        <Title>
        <span className="title">Vladimir de Pachmann performing Brahms Capriccio, opus 76, no. 5.</span>
        <span className="des">The Great Pianists, vol. 1, Dal Segno</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>19.</Number>
        <Title>
        <span className="title">Sigrid Onegin singing Brahms Die Mainacht, opus 43, no. 2.</span>
        <span className="des">Johannes Brahms Lied-Edition, vol. 8, ArkivCD</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>20.</Number>
        <Title>
        <span className="title">Julia Culp singing Brahms, Muß es eine Trennung geben, opus 33, no. 12.</span>
        <span className="des">Johannes Brahms Lied-Edition, vol. 8, ArkivCD</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>21.</Number>
        <Title>
        <span className="title">Leopold Demuth singing Brahms Minnelied, opus 71, no. 5.</span>
        <span className="des">Johannes Brahms Lied-Edition, vol. 8, ArkivCD</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>22.</Number>
        <Title>
        <span className="title">Elena Gerhardt singing Brahms Vergebliches Ständchen, opus 43, no. 2.</span>
        <span className="des">Johannes Brahms Lied-Edition, vol. 8, ArkivCD</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>23.</Number>
        <Title>
        <span className="title">Alexander Scriabin performing his Desir, opus 57, no. 1.</span>
        <span className="des">Alexander Scriabin, The Composer as Pianist, Pierian</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>24.</Number>
        <Title>
        <span className="title">Alexander Scriabin performing his Prelude, opus 11, no. 1.</span>
        <span className="des">Alexander Scriabin, The Composer as Pianist, Pierian</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>25.</Number>
        <Title>
        <span className="title">Alexander Scriabin performing his Prelude, opus 11, no. 2.</span>
        <span className="des">Alexander Scriabin, The Composer as Pianist, Pierian</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>26.</Number>
        <Title>
        <span className="title">Sergei Rachmaninoff performing the second theme of his 2nd piano concerto in C minor, opus 18.</span>
        <span className="des">Sergei Rachmaninoff, The Complete Recordings. BMG CD 1</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>27.</Number>
        <Title>
        <span className="title">Sergei Rachmaninoff performing his Prelude in Gb major, opus 23, no. 10.</span>
        <span className="des">Sergei Rachmaninoff, The Complete Recordings. BMG CD 8</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
      <Row>
        <Number>28.</Number>
        <Title>
        <span className="title">Sergei Rachmaninoff performing his Etude-Tableau in A minor, opus 39, no. 6.</span>
        <span className="des">Sergei Rachmaninoff, The Complete Recordings. BMG CD 7</span>
        </Title>
        <Download>
          <a href="" target="_blank">Download</a>
        </Download>
      </Row>
    </Layout>
  )
}

