import {Component} from 'react'
import {ListItem, Button} from './styledComponents'

class GradientDirectionItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: 0.5,
    }
  }

  displayDirection = () => {
    const {directionName, directionsList} = this.props
    const {displayText} = directionsList
    directionName(displayText)
    this.setState({bgColor: displayText ? 1 : 0.5})
  }

  render() {
    const {directionsList} = this.props
    const {directionId, displayText} = directionsList
    const {bgColor} = this.state

    return (
      <ListItem key={directionId}>
        <Button
          type="button"
          onClick={this.displayDirection}
          bgColorBtn={bgColor}
        >
          {displayText}
        </Button>
      </ListItem>
    )
  }
}

export default GradientDirectionItem
