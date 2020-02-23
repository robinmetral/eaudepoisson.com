import React from "react"
import { css } from "@emotion/core"

import Input from "../Input"

const Button = props => (
  <Input
    {...props}
    type={props.type || "button"}
    css={css`
      cursor: pointer;
    `}
  />
)

export default Button
