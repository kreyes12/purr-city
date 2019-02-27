import React, { Component } from 'react'

class Scene extends Component {

  state = {
    currentScene: this.props.scenes[0].id
  }

  render () {
    return (
      <div className='Scene'>
        <p>Hello</p>
        <p>{this.state.currentScene.name}</p>
      </div>
    )
  }
}

export default Scene
