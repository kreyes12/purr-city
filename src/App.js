import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Story from "./Story.js";
import WelcomePage from "./WelcomePage.js";

class App extends Component {
  state = {
    showScenes: false
  };

  showScenes = () => {
    this.setState({ showScenes: true });
  };

  render() {
    return (
      <div className="App">
        <Story />
      </div>
    );
  }
}

export default App;
