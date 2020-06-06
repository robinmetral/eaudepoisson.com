import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const StyledHeading = styled.span`
  ${({ theme, as, center }) => css`
    font-family: "Merriweather", serif;
    text-align: ${center ? "center" : "left"};
    font-size: ${as === "h3"
      ? theme.fontSizes[3]
      : as === "h2"
      ? theme.fontSizes[4]
      : theme.fontSizes[5]};
  `}
`;

// the header component supports levels 1 to 3
const Heading = ({
  h,
  center,
  children,
  className, // enables styling from parent with css prop
}) => (
  <StyledHeading
    as={`h${h}`}
    center={center}
    data-testid="header"
    className={className}
  >
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  h: PropTypes.oneOf(["1", "2", "3"]).isRequired,
};

export default Heading;
