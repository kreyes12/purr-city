import React, { Component } from 'react'
import Sound from 'react-sound'
import styled from 'styled-components'

const ActualText = styled.div`
border: 5px solid transparent;
border-radius: 2px;
padding: 8px;
box-shadow: 0 1px 0 1px,
inset 0 1px 0 1px,
              0 0 0 1px,
              inset 0 0 0 1px;
display: inline-block;
margin: auto;
font-size: 20px;
background-color: #F2F3F4;
cursor: pointer;

`
const Arrow = styled.i `
width: 0;
height: 0;
border: 5px solid transparent;
border-top-color: black;
margin-top: 23px;
animation: bounce 0.5s ease-in-out 0 infinite alternate;
float: right;
`

const Text = ({children, onClick}) => (
  <ActualText onClick={onClick}>
    {children}
    <Arrow />
  </ActualText>
)

export default Text
