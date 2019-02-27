import React, { Component } from 'react'

class WelcomePage extends Component {

  render () {
    return (
      <div className='WelcomePage'>
        <h1>Welcome to Purr City</h1>
        <button onClick={() => this.props.showScenes()}>Begin Game</button>
      </div>
    )
  }
}

export default WelcomePage
