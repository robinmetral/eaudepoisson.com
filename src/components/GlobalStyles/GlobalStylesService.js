import { css } from "@emotion/core"

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
    font-size: 1.75rem;
    line-height: 1.5;
    font-family: "Open Sans", sans-serif;
  }
`
