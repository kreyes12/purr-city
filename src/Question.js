import React, { Component } from "react";
import Sound from "react-sound";
import styled from "styled-components";

const ActualQuestion = styled.p`
  display: inline-block;
`;

const ActualButton = styled.button``;

class Question extends Component {
  state = {
    selectedValues: "",
    currentAnswer: ""
  };

  handleChange = e => {
    this.setState({ selectedValue: e.target.value });
  };

  handleSubmit = e => {
    if (this.state.selectedValue === "You give it the chicken.") {
      this.setState({ currentAnswer: "chicken" });
    } else if (this.state.selectedValue === "You give it milk.") {
      this.setState({ currentAnswer: "milk" });
    } else if (this.state.selectedValue === "You stroke it.") {
      this.setState({ currentAnswer: "stroke" });
    }
  };

  render() {
    return (
      <ActualQuestion>
        {this.props.question && this.props.question.text}
        <div>
          <form onChange={this.handleChange}>
            <input
              type="radio"
              name="answer"
              value={this.props.question.responses[0]}
            />
            <label>{this.props.question.responses[0]}</label>
            <input
              type="radio"
              name="answer"
              value={this.props.question.responses[1]}
            />
            <label>{this.props.question.responses[1]}</label>
            <input
              type="radio"
              name="answer"
              value={this.props.question.responses[2]}
            />
            <label>{this.props.question.responses[2]}</label>
          </form>
          <ActualButton onClick={this.handleSubmit}>Submit</ActualButton>
          {this.state.currentAnswer === "chicken" && (
            <div>
              <Sound
                url="./sounds/cat-eating.mp3"
                playStatus={Sound.status.PLAYING}
              />
              <p id="responses">The cat eats it and smiles.</p>
            </div>
          )}
          {this.state.currentAnswer === "milk" && (
            <div>
              <Sound
                url="./sounds/milk.mp3"
                playStatus={Sound.status.PLAYING}
              />
              <Sound
                url="./sounds/cat-eating.mp3"
                playStatus={Sound.status.STOPPED}
              />
              <p id="responses">The cat drinks it and smiles.</p>
            </div>
          )}
          {this.state.currentAnswer === "stroke" && (
            <div>
              <p id="responses">
                The cat likes it and smiles but looks at you expectantly.
              </p>
            </div>
          )}
        </div>
      </ActualQuestion>
    );
  }
}

export default Question;
