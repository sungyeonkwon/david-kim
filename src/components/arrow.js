import React from "react"
import { css } from 'linaria';

const arrow = css`
  background-color: transparent;
  stroke: none;
  fill: white;
  width: 63px;
  height: 28px;
  cursor: pointer;
  @media only screen and (max-width: 1200px) {
    width: 50px;
    height: 25px;
  }
  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 20px;
  }
`
export default ( props ) => {
  return props.direction === 'right' ?
  (
    <>
      <svg className={arrow} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 200.1 104.5">
      <path className="st0" d="M199.8,51.4l-51-51c-1-1-2.6,0.3-1.8,1.5l28.8,43.9H0v13h175.7l-28.8,43.9c-0.8,1.2,0.8,2.5,1.8,1.5l51-51
        C200.2,52.6,200.2,51.9,199.8,51.4z"/>
      </svg>
    </>
   ):
   (
    <>
      <svg className={arrow} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 200.1 104.5">
      <path className="st0" d="M0.3,53.2l51,51c1,1,2.6-0.3,1.8-1.5L24.3,58.8h175.8v-13H24.4L53.2,1.9c0.8-1.2-0.8-2.5-1.8-1.5l-51,51
        C-0.1,52-0.1,52.7,0.3,53.2z"/>
      </svg>
    </>
   )
}
 

