// GradientGenerator.js

import {Component} from 'react'
import {
  Container,
  Header,
  Paragraph,
  ListContainer,
  ColorPicker,
  InputCon,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    direction: 'top',
    firstColors: '#8ae323',
    secondColors: '#014f7b',
    directions: '',
  }

  FirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  SecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  directionName = displayText => {
    this.setState({direction: displayText})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstColor, secondColor, direction} = this.state
    this.setState({
      firstColors: firstColor,
      secondColors: secondColor,
      directions: direction,
    })
  }

  render() {
    const {
      firstColor,
      secondColor,
      firstColors,
      secondColors,
      directions,
    } = this.state
    return (
      <Container
        data-testid="gradientGenerator"
        bgDirection={directions}
        firstColor={firstColors}
        secondColor={secondColors}
      >
        <Header>Generate a CSS Color Gradient</Header>
        <Paragraph>Choose Direction</Paragraph>
        <ListContainer>
          {gradientDirectionsList.map(list => (
            <GradientDirectionItem
              key={list.directionId}
              directionsList={list}
              directionName={this.directionName}
            />
          ))}
        </ListContainer>
        <p>Pick the Colors</p>
        <ColorPicker onSubmit={this.submitForm}>
          <InputCon>
            <p htmlFor="color1">{firstColor}</p>
            <input
              type="color"
              id="color1"
              value={firstColor}
              onChange={this.FirstColor}
            />
          </InputCon>
          <InputCon>
            <p htmlFor="color2">{secondColor}</p>
            <input
              type="color"
              id="color2"
              value={secondColor}
              onChange={this.SecondColor}
            />
          </InputCon>
          <button type="submit">Generate</button>
        </ColorPicker>
      </Container>
    )
  }
}

export default GradientGenerator
