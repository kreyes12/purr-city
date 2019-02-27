import React, { Component } from 'react'
import Sound from 'react-sound'
import styled from 'styled-components'
import Image from './Image'
import { scenes } from './scene_data'
import Text from './Text'
import Button from './Button'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

class Story extends Component {

  state = {
    currentScene: 0
  }



  render () {
    const { currentScene } = this.state;

    console.log(currentScene);

    const sceneSwitcher = (scene) => {
      this.setState({currentScene:  scene})
    }

    const goToNext = () => {
      if(this.state.currentScene === scenes.length) {
        return
      }
      this.setState({currentScene:  this.state.currentScene += 1})
    }
    
    return (
      <Container>
        <Image imgSrc={scenes[currentScene].bgImage} />
        <Text text={scenes[currentScene].text} />
        <Text text={scenes[currentScene].question} />
        <Button buttonText='Next' handleOnClick={goToNext}/>
      </Container>
    )
  }
}

export default Story
