import { css } from "@emotion/core"
import theme from "../../theme"

export const createGlobalStyles = () => css`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    padding: 1.5rem;
    margin: 0;
    font-size: ${theme.fontSizes[2]};
    line-height: 1.5;
    font-family: "Open Sans", sans-serif;
  }
`
