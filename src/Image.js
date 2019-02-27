import React, { Component } from 'react'
import Sound from 'react-sound'
import styled from 'styled-components'
import {scenes} from './scene_data'
import testImage from './imgs/testImage.png'

const Img = styled.img`
`

const Image = ({imgSrc}) => (
  <Img src={testImage} />
)

export default Image
