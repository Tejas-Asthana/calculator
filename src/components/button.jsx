import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

class button extends React.Component {
  constructor(props) {
    super(props)
    this.isOperator = this.isOperator.bind(this)
    this.Clear = this.isClear.bind(this)
  }

  isOperator(props) {
    return (
      this.props.number === '+' || this.props.number === '-' || this.props.number === '*' || this.props.number === '/'
      ? "outline-light"
      : (this.props.number === 'C') ? "outline-info" : "outline-warning"
    )
  }

  isClear(props) {
    return (
      this.props.number === 'C' ? 'clear' : false
    )
  }

  render(props) {
    return (
      <Row className='keypad-btn'>
        <Button size='lg'
          onClick = {() => {
              this.props.number !== 'C' ? this.props.handleClick(this.props.number) : this.props.handleClick()
              }}
          variant={this.isOperator()}>
          {this.props.number}
        </Button>
      </Row>
    )
  }
}

export default button
