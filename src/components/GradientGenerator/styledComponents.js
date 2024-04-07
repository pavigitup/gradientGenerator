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

export const ColorPicker = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
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

export const Para = styled.p`
  color: #ffffff;
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`
export const Button = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 600;
  background-color: #00c9b7;
`
export const Input = styled.input`
  width: 150px; /* Adjust width as needed */
  height: 100px; /* Adjust height as needed */
  padding: 0; /* Remove padding */
  border: none; /* Remove border */
  background-color: transparent; /* Round the corners to make it look like a circle */
  cursor: pointer;
`
