import React, { Component } from 'react'
import Sound from 'react-sound'
import styled from 'styled-components'

const ActualText = styled.p`
border: 1px solid black;
`

const Text = ({text}) => (
  <ActualText>
    {text}
  </ActualText>
)

export default Text
