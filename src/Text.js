import React, { Component } from 'react'
import Sound from 'react-sound'
import styled from 'styled-components'

const ActualText = styled.p`
border: 1px solid black;
border-radius: 25px;
display: inline-block;
font-size: 20px;
background-color: #F2F3F4;
cursor: pointer;

`

const Text = ({children, onClick}) => (
  <ActualText onClick={onClick}>
    {children}
  </ActualText>
)

export default Text
