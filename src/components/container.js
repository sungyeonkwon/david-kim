import React from "react"
import s from "./container.module.css"

export default ({ children }) => (
  <div className={s.container}>{children}</div>
)