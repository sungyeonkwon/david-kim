import React from "react"
import { styled } from 'linaria/react'
import { css } from 'linaria';
import Arrow from '../components/arrow'
import Layout from '../components/layout'

const Row = styled.div`
  // background-color: pink;
  border-top: 1px solid white;
  padding-top: 10px;
  width:100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`
const Subheading = styled.div`
  font-size: 24px;
  margin: 50px 0 20px 0;
`

const Number = styled.div`
  width: 10%;
`
const Title = styled.div`
  width: 60%;
  padding-right: 35px;
`
const Download = styled.div`
  width: 30%;
  text-align:right;
`
const audio = css`
  margin: 20px 0;
  filter: sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(12%);
  width:100%;
`
const AudioTitle = styled.div`
  display:block;
`

export default () => {
 return (
    <>
      <h1>CD Tracks for “The Brahmsian Hairpin” in <i>19th-Century Music</i>, Summer 2012</h1>
      <Subheading>CD Tracks</Subheading>
      <Row>
        <Number>1.</Number>
        <Title>
        <AudioTitle>Johannes Brahms performing his <i>Ungarischer Tanz</i> no. 1 in G minor.</AudioTitle>
        <span className="des">Cylinder digitally remastered by Jonathan Berger.</span>
        <audio className={audio} src={'01-brahms-speaking-and-playing.mp3'} controls/>
        </Title>
        <Download> 
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>2.</Number>
        <Title>
        <AudioTitle>Joseph Joachim performing his Romance in C.</AudioTitle>
        <span className="des"><i>The Great Violinists</i>, Testament, CD 1.</span>
        <audio className={audio} src={'02-romance-in-c-major.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>3.</Number>
        <Title>
        <AudioTitle>Ilona Eibenschütz performing Brahms Waltzes, opus 39, nos. 2 and 15.</AudioTitle>
        <span className="des"><i>The Pupils of Clara Schumann.</i> Pearl Gemm CD 6</span>
        <audio className={audio} src={'03-waltzes-op39-nos2-and-15.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>4.</Number>
        <Title>
        <AudioTitle>Ilona Eibenschütz performing Brahms Waltz, opus 39, no. 15.</AudioTitle>
        <span className="des"><i>The Pupils of Clara Schumann.</i> Pearl Gemm CD 6</span>
        <audio className={audio} src={'04-waltzes-op39-no15.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>5.</Number>
        <Title>
        <AudioTitle>Ilona Eibenschütz performing Brahms Intermezzo, opus 119, no. 2.</AudioTitle>
        <span className="des">Recorded for G&T 1903, <i>The Pupils of Clara Schumann.</i> Pearl Gemm CD 6</span>
        <audio className={audio} src={'05-intermezzoiin-e-minor-op119n.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>6.</Number>
        <Title>
        <AudioTitle>Etelka Freund performing Brahms Capriccio, opus 76, no. 1.</AudioTitle>
        <span className="des"><i>Etelka Freund</i>, Pearl, CD 2</span>
        <audio className={audio} src={'06-capriccio-in-fsharp-minor-op76.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>7.</Number>
        <Title>
        <AudioTitle>Etelka Freund performing Brahms Variations on a Theme of Händel, opus 24, variation 20.</AudioTitle>
        <span className="des"><i>Etelka Freund</i>, Pearl, CD 1</span>
        <audio className={audio} src={'07-variation20.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>

      <Subheading>
      Excerpts from Fanny Davies and Adelina de Lara performing Schumann Kinderszenen, opus 15. The Pupils of Clara Schumann. Pearl Gemm CDs 1, 4
      </Subheading>

      <Row>
        <Number>8.</Number>
        <Title>
        <AudioTitle>Fanny Davies, movement 2, <i>Kuriose Geschichte</i></AudioTitle>
        <audio className={audio} src={'08-davieskszenen2.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>9.</Number>
        <Title>
        <AudioTitle>Adelina de Lara, movement 2, <i>Kuriose Geschichte</i></AudioTitle>
        <audio className={audio} src={'09-delarakszenen2-march1951.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>10.</Number>
        <Title>
        <AudioTitle>Fanny Davies, movement 4, <i>Bittendes Kind</i></AudioTitle>
        <audio className={audio} src={'10-davieskszenen4.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>11.</Number>
        <Title>
        <AudioTitle>Adelina de Lara, movement 4, <i>Bittendes Kind</i> </AudioTitle>
        <audio className={audio} src={'11-delarakszenen4-march1951.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>12.</Number>
        <Title>
        <AudioTitle>Fanny Davies, movement 5, <i>Glückes genug</i></AudioTitle>
        <audio className={audio} src={'12-davieskszenen5.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>13.</Number>
        <Title>
        <AudioTitle>Adelina de Lara, movement 5, <i>Glückes genug</i></AudioTitle>
        <audio className={audio} src={'13-delarakszenen5-march1951.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>14.</Number>
        <Title>
        <AudioTitle>Fanny Davies, movement 11, <i>Fürchtenmachen</i></AudioTitle>
        <audio className={audio} src={'14-davieskszenen11.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>15.</Number>
        <Title>
        <AudioTitle>Adelina de Lara, movement 11, <i>Fürchtenmachen</i></AudioTitle>
        <audio className={audio} src={'15-delarakszenen11-march1951.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>16.</Number>
        <Title>
        <AudioTitle>Fanny Davies, movement 10, <i>Fast zu ernst</i></AudioTitle>
        <audio className={audio} src={'16-davieskszenen10.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>17.</Number>
        <Title>
        <AudioTitle>Adelina de Lara, movement 10, <i>Fast zu ernst</i> </AudioTitle>
        <audio className={audio} src={'17-delarakszenen10-march1951.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>

      <Subheading>
      Supplementary examples
      </Subheading>

      <Row>
        <Number>18.</Number>
        <Title>
        <AudioTitle>Vladimir de Pachmann performing Brahms Capriccio, opus 76, no. 5.</AudioTitle>
        <span className="des"><i>The Great Pianists</i>, vol. 1, Dal Segno</span>
        <audio className={audio} src={'18-die-mainacht.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>19.</Number>
        <Title>
        <AudioTitle>Sigrid Onegin singing Brahms Die Mainacht, opus 43, no. 2.</AudioTitle>
        <span className="des"><i>Johannes Brahms Lied-Edition</i>, vol. 8, ArkivCD</span>
        <audio className={audio} src={'19-muss-es-eine-trennung-geben.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>20.</Number>
        <Title>
        <AudioTitle>Julia Culp singing Brahms, Muß es eine Trennung geben, opus 33, no. 12.</AudioTitle>
        <span className="des"><i>Johannes Brahms Lied-Edition</i>, vol. 8, ArkivCD</span>
        <audio className={audio} src={'20-minnelied.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>21.</Number>
        <Title>
        <AudioTitle>Leopold Demuth singing Brahms Minnelied, opus 71, no. 5.</AudioTitle>
        <span className="des"><i>Johannes Brahms Lied-Edition</i>, vol. 8, ArkivCD</span>
        <audio className={audio} src={'21-vergebliches-staendchen.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>22.</Number>
        <Title>
        <AudioTitle>Elena Gerhardt singing Brahms Vergebliches Ständchen, opus 43, no. 2.</AudioTitle>
        <span className="des"><i>Johannes Brahms Lied-Edition</i>, vol. 8, ArkivCD</span>
        <audio className={audio} src={'22-capriccio-in-c-sharp-minor-Op7.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>23.</Number>
        <Title>
        <AudioTitle>Alexander Scriabin performing his Desir, opus 57, no. 1.</AudioTitle>
        <span className="des">Alexander Scriabin, The Composer as Pianist, Pierian</span>
        <audio className={audio} src={'23-desir-op57-no1.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>24.</Number>
        <Title>
        <AudioTitle>Alexander Scriabin performing his Prelude, opus 11, no. 1.</AudioTitle>
        <span className="des"><i>Alexander Scriabin, The Composer as Pianist,</i> Pierian</span>
        <audio className={audio} src={'24-prelude-op11-no1.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>25.</Number>
        <Title>
        <AudioTitle>Alexander Scriabin performing his Prelude, opus 11, no. 2.</AudioTitle>
        <span className="des"><i>Alexander Scriabin, The Composer as Pianist,</i> Pierian</span>
        <audio className={audio} src={'25-prelude-op11-no2.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>26.</Number>
        <Title>
        <AudioTitle>Sergei Rachmaninoff performing the second theme of his 2nd piano concerto in C minor, opus 18.</AudioTitle>
        <span className="des"><i>Sergei Rachmaninoff, The Complete Recordings.</i> BMG CD 1</span>
        <audio className={audio} src={'26-rach-2ndconcerto-2ndtheme.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>27.</Number>
        <Title>
        <AudioTitle>Sergei Rachmaninoff performing his Prelude in Gb major, opus 23, no. 10.</AudioTitle>
        <span className="des"><i>Sergei Rachmaninoff, The Complete Recordings.</i> BMG CD 8</span>
        <audio className={audio} src={'27-rachmaninov-preludes-op23.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
      <Row>
        <Number>28.</Number>
        <Title>
        <AudioTitle>Sergei Rachmaninoff performing his Etude-Tableau in A minor, opus 39, no. 6.</AudioTitle>
        <span className="des"><i>Sergei Rachmaninoff, The Complete Recordings.</i> BMG CD 7</span>
        <audio className={audio} src={'28-rach-aminor-etude-tableauopening.mp3'} controls/>
        </Title>
        <Download>
          <a href="" target="_blank">Download pdf of score</a>
        </Download>
      </Row>
    </>
  )
}

