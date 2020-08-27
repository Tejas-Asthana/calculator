import React from 'react'

export default class screen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exp: props.exp
    }
  }

  handleChange = (event) => {
    this.setState(prev => {
      return {
        exp: prev.exp + document.getElementById('inputScreen').value
      }
    })
  }

  render(props) {
    let inputstyle = {
      backgroundColor: '#9f2c4a',
      border: 'none',
      color: '#fff',
      textAlign: 'right'
    }
    return (
      <div className='screen'>
        <input
          type='text'
          id='inputScreen'
          className='screen-input'
          defaultValue={this.props.exp}
          placeholder={0}
          onChange={(event) => this.handleChange(event)}
          style={inputstyle}
          disabled
        />
      </div>
    )
  }
}
