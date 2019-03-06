import React, { Component } from 'react'
import Sound from 'react-sound'
import styled from 'styled-components'

const ActualQuestion = styled.p`
display: inline-block;
`

const Question = ({question}) => (
  <ActualQuestion>
    {question.text}
    {question.responses.map(response => <div><input type='radio' /><label>{response}</label></div>)}
  </ActualQuestion>
)

export default Question
