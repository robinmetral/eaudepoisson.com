import styled from "@emotion/styled"

const Input = styled.input`
  color: inherit;
  background: none;
  font-family: inherit;
  font-size: 100%;
  padding: ${({ theme }) => `${theme.space[0]} ${theme.space[1]}`};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.space[0]};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black};
`

export default Input
