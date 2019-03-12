import React, { Component } from 'react'
import Sound from 'react-sound'
import styled from 'styled-components'

const ActualQuestion = styled.p`
display: inline-block;
`

const ActualButton = styled.button`
`

class Question extends Component {

  render () {
    return (

      <ActualQuestion>
        {this.props.question.text}
        <div>
          <input type='radio' value='' /><label>{this.props.question.responses[0]}</label>
          <input type='radio' value='' /><label>{this.props.question.responses[1]}</label>
          <input type='radio' value='' /><label>{this.props.question.responses[2]}</label>
          <ActualButton onClick={this.submitResponse}>Submit</ActualButton>
        </div>

      </ActualQuestion>
    )
  }

}

export default Question
