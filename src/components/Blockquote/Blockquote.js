import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const StyledBlockquote = styled.blockquote(
  ({ theme, large }) => css`
    margin-left: 0;
    padding-left: ${theme.space[3]};
    border-left: 10px solid ${theme.colors.primary};
    ${large &&
    css`
      font-family: "Merriweather", serif;
      font-size: ${theme.fontSizes[3]};
    `}
  `,
);

// the header component supports levels 1 to 3
const Blockquote = ({ large, children }) => (
  <StyledBlockquote large={large} data-testid="blockquote">
    {children}
  </StyledBlockquote>
);

Blockquote.propTypes = {
  large: PropTypes.bool,
};

Blockquote.defaultProps = {
  large: false,
};

export default Blockquote;
