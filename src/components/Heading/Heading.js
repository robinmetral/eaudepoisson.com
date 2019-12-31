import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const StyledHeading = styled.span`
  ${({ as }) => css`
    font-family: "Merriweather", serif;
    text-align: ${as === "h1" ? "center" : "left"};
  `}
`

// the header component supports levels 1 to 3
const Heading = ({ h, children }) => (
  <StyledHeading as={`h${h}`} data-testid="header">
    {children}
  </StyledHeading>
)

Heading.propTypes = {
  h: PropTypes.oneOf(["1", "2", "3"]).isRequired,
}

export default Heading
