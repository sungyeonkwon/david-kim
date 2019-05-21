import React from "react"
import { css } from 'linaria'
import Arrow from './arrow'

const btn = css` 
  background-color: black;
  padding: 10px 15px;
  display: inline-block;
  font-size: 22px;
  color: white;
`
const div = css`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
`

const inline = css`
  display: inline-block;
  width: 50%;
`
export default ( props ) => {
  return (
    <div className={div}>
      <span className={inline}>
        <Arrow direction="right" />
      </span>
      <span className={btn}>
        {props.children}
      </span>
    </div>
   )
 }
 
 