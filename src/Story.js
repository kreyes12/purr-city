import React, { Component } from 'react'
import Sound from 'react-sound'
import styled from 'styled-components'
import Image from './Image'
import { scenes } from './scene_data'
import Text from './Text'
import Button from './Button'
import Question from './Question'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

class Story extends Component {

  state = {
    currentScene: 0,
    currentText: 0
  }

  sceneSwitcher = (scene) => {
    this.setState({currentScene:  scene})
  }

  goToNextScene = () => {
    if(this.state.currentScene === scenes.length) {
      return
    }
    this.setState({currentScene:  this.state.currentScene + 1})
  }

  goToNextText = () => {
      this.setState({currentText: this.state.currentText + 1})
    }



  render () {
    const { currentScene, currentText } = this.state;

    console.log(currentScene, currentText)
    
    return (
      <Container>
        <Image imgSrc={scenes[currentScene].bgImage} />
        <Text onClick={this.goToNextText}>
          {scenes[currentScene].text[currentText]}
        </Text>
        <Question question={scenes[currentScene].question} />
        <Button buttonText='Next'onClick={this.goToNextScene}/>
      </Container>
    )
  }
}


export default Story
