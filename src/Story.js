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
    scenes: scenes,
    currentScene: scenes[0].id,
    catSideways: false,
    catLicking: true,
    sound: true,
    currentText: 0,
    catBack: false
  }


  goToNextScene = () => {
    this.setState({currentScene:  this.state.currentScene + 1, catBack: true, catSideways: false, currentText: 0})
  }

  goToNextText = () => {
      this.setState({currentText: this.state.currentText + 1, catLicking: false, catSideways: true, sound: false})
    }
  








  render () {
    const currentScene = this.state.scenes.find(scene => scene.id === this.state.currentScene)
    const {currentText} = this.state

    console.log(currentScene.catImage)
    
    return (
      <Container>
      {this.state.catLicking && <img src={currentScene.catImage}/>}
      {currentScene.text[currentText] && 
        <Text onClick={this.goToNextText}>
          {currentScene.text[currentText]}
        </Text>}
        {currentScene.sound && this.state.sound &&
          <Sound 
            url={currentScene.sound}
            playStatus={Sound.status.PLAYING}
            />}

        {currentScene.id === 1 && <Question question={currentScene.question} />}
        <button onClick={this.goToNextScene}>Next</button>
      </Container>
    )
  }
}


export default Story
