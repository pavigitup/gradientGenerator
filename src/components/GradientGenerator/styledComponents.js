import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(
    to ${props => props.bgDirection},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Header = styled.h1`
  color: #ffffff;
`

export const Paragraph = styled.p`
  color: #ffffff;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  width: 40%;
  justify-content: space-between;
`

export const ColorPicker = styled.form`
  display: flex;
  justify-content: space-around;
  width: 20%;
  margin-top: 3%;
`

export const InputCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`
