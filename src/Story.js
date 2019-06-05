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
  display: flex;
  flex-direction: column;
`;

const SCatImage = styled.img`
  position: absolute;
  z-index: 1000;
  left: 60%;
  top: 70%;
`;

const SButton = styled.button`
  margin: 0 auto 25px;
`;

const SBgImage = styled.img`
  margin-bottom: 25px;
  max-width: 100vw;
  max-height: 100vh;
`;

const ThirdCat = styled.img`
  position: absolute;
  z-index: 1000;
  left: 47%;
  top: 30%;
`;

// /imgs/thirdcat.png

// const FourthCat - "/imgs/fourthcat.png";

class Story extends Component {
  state = {
    currentSceneId: scenes[0].id,
    currentText: 0
  };

  //initial state - a variable called catPosition  const sideways const back e.g. const licking = "licking", cat pos = licking

  goToNextScene = () => {
    this.setState({
      currentSceneId: this.state.currentSceneId + 1,
      currentText: 0
    });
  };

  goToNextText = () => {
    this.setState({
      currentText: this.state.currentText + 1,
      sound: false
    });
  };
  //why have sound false?  why have cat licking true and cat sideways true?
  render() {
    const currentScene = scenes.find(
      scene => scene.id === this.state.currentSceneId
    );

    const { currentText } = this.state;
    //same as const currentText = this.state.currentText;

    // console.log(currentScene.bgImage);

    return (
      <Container>
        <div>
          <SBgImage src={currentScene.bgImage} />

          <SCatImage src={currentScene.catImage} />
        </div>
        {
          //always rendering bg image, but only renders cat image when catVisible is true.
          //what does the code above do with this.state.catVisible?
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
        {currentScene.id === 1 && currentScene.question && (
          <Question question={currentScene.question} />
        )}
        <SButton onClick={this.goToNextScene}>Next</SButton>
      </Container>
    );
  }
}

// What does the code above do? If the currenScene.id is 1 and if there is a currenScene.question,
// run the question component?

//Why is the cat licking always true and needed?
//Why is Cat sideways?
export default Story;
