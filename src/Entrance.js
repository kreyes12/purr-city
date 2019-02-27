import React, { Component } from 'react'
import Sound from 'react-sound'
import OpenGate from './OpenGate.js'

class Entrance extends Component {

  state = {
    loaded: false,
    sound: false,
    clicked: false,
    clickedAgain: false,
    speeches: ['But the gates are locked and guarded by the vigilant pawkeeper!', '   You have a chicken drumstick and some milk in your satchel.', 'Oh no, you are not a cat!'],
    selectedOption: '',
    milk: false,
    chicken: false,
    stroke: false
  }


  componentDidMount() {
    setInterval(() => {this.setState({
      loaded: true,
    })}
  , 2000)}

  handleClick = (event) => {
    this.setState({
      clicked: true,
      loaded: false
    })
  }

  handleNextClick = (event) => {
    this.setState({
      clickedAgain: true
    })
  }


  handleOptionChange = (event) => {
  this.setState({
      selectedOption: event.currentTarget.value
  })
}

  handleFormSubmit =  (formSubmitEvent) => {
  formSubmitEvent.preventDefault();

  console.log('You have selected:', this.state.selectedOption)
  if (this.state.selectedOption === 'You stroke it.') {
      this.setState({
        stroke: true
      })
    }
  if (this.state.selectedOption === 'You give it milk.') {
    this.setState({
      milk: true
    })
  }
  if (this.state.selectedOption === 'You give it the chicken.') {
    this.setState({
      chicken: true
    })
  }
}

  render () {

    return (
      <div className='Entrance'>
        <h1>Entrance to Purr City - Free for all cats.  3 purr coins for humans.</h1>
        <img id='gates-background' src='../imgs/gates_background2.png' alt='gate to Purr City' />
        <img id='cat-licking' src='../imgs/catsolo-sideways.png' />
        {this.state.selectedOption === 'You give it the chicken.' &&
          <OpenGate />
        }
        {this.state.sound && <Sound url='./trumpet.mp3' playStatus={Sound.status.PLAYING} onFinishedPlaying={this.handleSongFinishedPlaying}/>}
        {this.state.loaded && <div id='dialog-box' onClick={this.handleClick}><p>Congratulations! You have reached the gates of Purr City.</p></div>}
        {this.state.clicked && <div id='dialog-box'onClick={this.handleNextClick}><p>{this.state.speeches[0]}</p></div>}
        {this.state.clickedAgain && <div id='dialog-box'onClick={this.handleNextClick}><p>{this.state.speeches[1]}</p></div>}
        <p>How do you get past the Pawkeeper? (More than one action may be required)</p>
        <form id="entrance" onSubmit={this.handleFormSubmit}>
          <input type="radio" name="option" value="You stroke it."
            checked={this.state.selectedOption === 'You stroke it.'}
            onChange={this.handleOptionChange} />You stroke it.<br/>
          <input type="radio" name="option" value="You give it milk."
            checked={this.state.selectedOption === 'You give it milk.'}
            onChange={this.handleOptionChange} />You give it milk.<br/>
         <input type="radio" name="option" value="You give it the chicken."
            onChange={this.handleOptionChange} />You give it the chicken.<br/>
         <input type="submit" value="Submit choice" className="orange" />
        </form>
        {this.state.stroke && <p id='response'>The cat likes it and purrs but looks at you expectantly</p>}
        {this.state.milk && <p id='response'>The cat drinks it and smiles</p>}
      </div>
    )
  }
}

export default Entrance
