import { css } from "@emotion/core"
import styled from "@emotion/styled"

export default styled.div`
  ${({ theme: { sizes } }) => css`
    margin: 0 auto;
    width: ${sizes[1]};
  `}
`
