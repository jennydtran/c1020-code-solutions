import React from 'react';
import ReactDOM from 'react-dom';

let intervalID = null;

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isPlaying: false
    };
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.handleClickPause = this.handleClickPause.bind(this);
  }

  tick() {
    this.setState(state => ({
      counter: this.state.counter + 1
    }));
  }

  reset() {
    if (this.state.isPlaying === false && this.state.counter !== 0) {
      this.setState(state => ({
        counter: 0
      }));
      clearInterval(intervalID);
    }
  }

  handleClickPlay() {
    this.setState(state => ({
      isPlaying: true
    }));
    intervalID = setInterval(this.tick, 1000);
  }

  handleClickPause() {
    this.setState(state => ({
      isPlaying: false
    }));
    clearInterval(intervalID);
  }

  render() {
    const isPlaying = this.state.isPlaying;
    let button;
    let playOrPause;

    if (!isPlaying) {
      button = 'fas fa-play';
      playOrPause = this.handleClickPlay;
    } else {
      button = 'fas fa-pause';
      playOrPause = this.handleClickPause;
    }

    return (
      <div className="container">
        <div id="watch" onClick={this.reset}>
          <div id="counter">{this.state.counter}</div>
        </div>
        <div id="button" onClick={playOrPause}>
          <i className={button}></i>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.querySelector('#root')
);
