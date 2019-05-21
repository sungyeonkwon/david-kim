import React from "react"
import { css } from 'linaria';

const arrow = css`
  background-color: red;
  stroke: none;
  fill: white;
  width: 100%;
  height: 20px;
`
export default ( props ) => {
  return props.direction === 'right' ?
  (
    <>
      <svg className={arrow} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 143.1 104.5">
      <path class="st0" d="M142.8,51.4l-51-51c-1-1-2.6,0.3-1.8,1.5l28.8,43.9H0v13h118.7l-28.8,43.9c-0.8,1.2,0.8,2.5,1.8,1.5l51-51
        C143.2,52.6,143.2,51.9,142.8,51.4z"/>
      </svg>
    </>
   ):
   (
    <>
      <svg className={arrow} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 143.1 104.5">
      <path class="st0" d="M0.3,53.1l51,51c1,1,2.6-0.3,1.8-1.5L24.4,58.7h118.7v-13H24.4L53.2,1.9c0.8-1.2-0.8-2.5-1.8-1.5l-51,51
        C-0.1,51.9-0.1,52.6,0.3,53.1z"/>
      </svg>
    </>
   )

 }
 