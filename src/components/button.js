import React from "react"
import { css } from 'linaria'
import Arrow from './arrow'

const btn = css` 
  padding: 10px 15px;
  display: inline-block;
  font-size: 28px;
  font-family: "Cochin-Regular";
  `
const div = css`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #0d4b56;
  color: white;
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
 
 