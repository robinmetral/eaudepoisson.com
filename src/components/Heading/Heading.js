import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const StyledHeading = styled.span`
  ${({ center }) => css`
    font-family: "Merriweather", serif;
    text-align: ${center ? "center" : "left"};
  `}
`

// the header component supports levels 1 to 3
const Heading = ({ h, center, children }) => (
  <StyledHeading as={`h${h}`} center={center} data-testid="header">
    {children}
  </StyledHeading>
)

Heading.propTypes = {
  h: PropTypes.oneOf(["1", "2", "3"]).isRequired,
}

export default Heading
