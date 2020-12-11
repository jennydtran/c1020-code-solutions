import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      play: false,
      pause: true
    };
    this.tick = this.tick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  reset() {
    this.setState({
      counter: 0
    });
  }

  handleClick() {
    this.setState({
      play: !this.state.play,
      pause: !this.state.pause
    });
  }

  render() {
    const isPlaying = this.state.play;
    const isPaused = this.state.pause;

    let button;
    if (isPlaying) {
      button = 'fas fa-pause';
    } else if (!isPlaying) {
      button = 'fas fa-play';
    }
    return (
      <div className="container">
        <div id="watch">
          <div id="counter">{this.state.counter}</div>
        </div>
        <div id="button" onClick={this.handleClick}>
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

/// stopped at the thought: separate handler events for play, pause, reset;
