import { css } from "@emotion/core";
import styled from "@emotion/styled";

export default styled.div`
  ${({ theme, large }) => css`
    margin: 0 auto;
    max-width: ${large ? theme.sizes[6] : theme.sizes[4]};
  `}
`;
