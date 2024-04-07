import styled from 'styled-components'

export const ListItem = styled.li`
  width: 100px;
`
export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  font-size: 15px;
  border-radius: 5px;
  border: none;
  opacity: ${props => props.bgColorBtn};
  outline: none;
  &:active {
    opacity: 1;
  }
`
