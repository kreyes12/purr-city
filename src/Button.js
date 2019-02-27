import React, { Component } from 'react'
import Sound from 'react-sound'
import styled from 'styled-components'

const StyledButton = styled.button ``

const Button = ({buttonText, handleOnClick}) => (
  <StyledButton onClick={() => { handleOnClick() }}>
    {buttonText}
  </StyledButton>
)

export default Button
