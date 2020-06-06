import React from "react";
import styled from "@emotion/styled";

/*
 * this component can be used as a button or as a link
 * by using the `as` prop
 */

const StyledButton = styled.button`
  padding: ${({ theme }) => `${theme.space[0]} ${theme.space[1]}`};
  border: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  /* reset button styles */
  color: inherit;
  background: none;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  width: 100%;
  /* reset link styles */
  display: block;
  text-decoration: none;
  text-align: center;
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
