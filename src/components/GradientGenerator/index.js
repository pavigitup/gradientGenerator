import {Component} from 'react'
import {
  Container,
  Header,
  Paragraph,
  ListContainer,
  ColorPicker,
  InputCon,
  Para,
  BtnContainer,
  Button,
  Input,
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
    activeDirection: 'Top',
  }

  setActiveDirection = direction => {
    this.setState({activeDirection: direction})
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
      firstColor,
      secondColor,
      direction,
    })
  }

  render() {
    const {firstColor, secondColor, direction, activeDirection} = this.state
    return (
      <Container
        data-testid="gradientGenerator"
        bgDirection={direction}
        firstColor={firstColor}
        secondColor={secondColor}
      >
        <Header>Generate a CSS Color Gradient</Header>
        <Paragraph>Choose Direction</Paragraph>
        <ListContainer>
          {gradientDirectionsList.map(list => (
            <GradientDirectionItem
              key={list.directionId}
              directionsList={list}
              directionName={this.directionName}
              setActiveDirection={this.setActiveDirection}
              activeDirection={activeDirection}
            />
          ))}
        </ListContainer>
        <Para>Pick the Colors</Para>
        <form onSubmit={this.submitForm}>
          <ColorPicker>
            <InputCon>
              <p htmlFor="color1">{firstColor}</p>
              <Input
                type="color"
                id="color1"
                value={firstColor}
                onChange={this.FirstColor}
              />
            </InputCon>
            <InputCon>
              <p htmlFor="color2">{secondColor}</p>
              <Input
                type="color"
                id="color2"
                value={secondColor}
                onChange={this.SecondColor}
              />
            </InputCon>
          </ColorPicker>
          <BtnContainer>
            <Button type="submit">Generate</Button>
          </BtnContainer>
        </form>
      </Container>
    )
  }
}

export default GradientGenerator
