import React from 'react'
import Screen from './screen.jsx'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NumberButton from './button.jsx'
import * as math from 'mathjs'

export default class calci extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      exp: ''
    }

    this.addToInput = this.addToInput.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleAns = this.handleAns.bind(this)
  }

  addToInput(val) {
    this.setState(prev => {
      return {
        exp: prev.exp === ''
               ? ( val === '/' || val === '*' )
                  ? prev.exp
                  : prev.exp + val
               : ( prev.exp === '+' || prev.exp === '-' || prev.exp === '.' )
                  ? ( val === '*' || val === '/' || val === '-' || val === '+' || val === '.' )
                      ? prev.exp
                      : prev.exp + val
                  : (prev.exp[prev.exp.length-1] === '/' || prev.exp[prev.exp.length-1] === '*'
                        || prev.exp[prev.exp.length-1] === '+' || prev.exp[prev.exp.length-1] === '-'
                                || prev.exp[prev.exp.length-1] === '.' )
                      ? ( val === '*' || val === '/' || val === '-' || val === '+' || val === '.' )
                          ? prev.exp
                          : prev.exp + val
                      : prev.exp + val
      }
    })
    // console.log(this.state.exp)
  }

  handleClear() {
    this.setState({exp : ""})
    // console.log(this.state.exp)
  }

  handleAns() {
    this.setState(prev => {
      return {
              exp: prev.exp === '+' || prev.exp === '/' || prev.exp === '*' || prev.exp === '-'
              ? prev.exp
              : math.evaluate(prev.exp)
              }
    })
    // console.log(this.state.exp)
  }


  render(props) {
    // console.log(this.props.key)
    return (
      <div className='calci-body' >
        <Screen exp={this.state.exp} />
        <div className='keypad'>
          <Container fluid >
            <Row xl={9} >
              <Col className='column'>
                <NumberButton number='1' handleClick={this.addToInput} />
                <NumberButton number='4' handleClick={this.addToInput} />
                <NumberButton number='7' handleClick={this.addToInput} />
                <NumberButton number='.' handleClick={this.addToInput} />
              </Col>
              <Col className='column'>
                <NumberButton number='2' handleClick={this.addToInput} />
                <NumberButton number='5' handleClick={this.addToInput} />
                <NumberButton number='8' handleClick={this.addToInput} />
                <NumberButton number='0' handleClick={this.addToInput} />
              </Col>
              <Col className='column'>
                <NumberButton number='3' handleClick={this.addToInput} />
                <NumberButton number='6' handleClick={this.addToInput} />
                <NumberButton number='9' handleClick={this.addToInput} />
                <NumberButton number='C' handleClick={this.handleClear} />
              </Col>
              <Col className='column'>
                <NumberButton number='+' handleClick={this.addToInput} />
                <NumberButton number='/' handleClick={this.addToInput} />
                <NumberButton number='*' handleClick={this.addToInput} />
                <NumberButton number='-' handleClick={this.addToInput} />
              </Col>
            </Row>
            <Row xl={1} md={1} sm={1} xs={1}>

            <Button size='lg'
                  className='last-row'
                  onClick={this.handleAns}
                  disabled={this.state.exp ? false : true}
                  variant="outline-success">
                      =
                </Button>
            </Row>
        </Container>
        </div>
      </div>
    )
  }
}
