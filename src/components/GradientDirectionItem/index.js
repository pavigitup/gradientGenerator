import {Component} from 'react'
import {ListItem, Button} from './styledComponents'

class GradientDirectionItem extends Component {
  displayDirection = () => {
    const {directionName, directionsList, setActiveDirection} = this.props
    const {displayText} = directionsList
    directionName(displayText)
    setActiveDirection(displayText)
  }

  render() {
    const {directionsList, activeDirection} = this.props
    const {directionId, displayText} = directionsList

    return (
      <ListItem key={directionId}>
        <Button
          type="button"
          onClick={this.displayDirection}
          bgColorBtn={activeDirection === displayText ? 1 : 0.5}
        >
          {displayText}
        </Button>
      </ListItem>
    )
  }
}

export default GradientDirectionItem
