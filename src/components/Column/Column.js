import { css } from "@emotion/core"
import styled from "@emotion/styled"

export default styled.div`
  ${({ theme: { space, sizes } }) => css`
    margin: 0 auto;
    max-width: ${space[0]};
    padding: ${sizes[1]};
  `}
`
