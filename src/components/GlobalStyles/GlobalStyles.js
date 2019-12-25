import React from "react"
import { Global } from "@emotion/core"
import { createGlobalStyles } from "./GlobalStylesService"

const globalStyles = createGlobalStyles()

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
