import React, { Component } from "react";
import Sound from "react-sound";
import styled from "styled-components";
import { scenes } from "./scene_data";
import Text from "./Text";
import Button from "./Button";
import Question from "./Question";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

class Story extends Component {
  state = {
    currentSceneId: scenes[0].id,
    catSideways: false,
    catLicking: true,
    currentText: 0,
    catBack: false
  };

  goToNextScene = () => {
    this.setState({
      currentSceneId: this.state.currentSceneId + 1,
      catBack: true,
      catSideways: false,
      currentText: 0
    });
  };

  goToNextText = () => {
    this.setState({
      currentText: this.state.currentText + 1,
      catLicking: true,
      catSideways: true,
      sound: false
    });
  };

  render() {
    const currentScene = scenes.find(
      scene => scene.id === this.state.currentSceneId
    );

    const { currentText } = this.state;
    //same as const currentText = this.state.currentText;

    console.log(currentScene.catImage);

    return (
      <Container>
        {this.state.catLicking && <img src={currentScene.catImage} />}
        {
          //[currentText] - this is javascript which will evaluate the value e.g.1
        }
        {currentScene.text[currentText] && (
          <Text onClick={this.goToNextText}>
            {currentScene.text[currentText]}
          </Text>
        )}
        {currentScene.sound && (
          <Sound url={currentScene.sound} playStatus={Sound.status.PLAYING} />
        )}

        {currentScene.id === 1 && <Question question={currentScene.question} />}
        <button onClick={this.goToNextScene}>Next</button>
      </Container>
    );
  }
}

export default Story;
