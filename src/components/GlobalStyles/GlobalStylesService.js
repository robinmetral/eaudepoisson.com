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
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    padding: 1.5rem;
    margin: 0;
    font-size: ${theme.fontSizes[2]};
    line-height: 1.5;
    font-family: "Open Sans", sans-serif;
    overflow-x: hidden;
  }
  /* todo add css reset here and remove from components */
  figure {
    margin: 0;
  }
`
