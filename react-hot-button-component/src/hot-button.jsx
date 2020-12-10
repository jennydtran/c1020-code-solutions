import React from 'react';

let counter = 0;

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberClicks: counter
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      numberClicks: counter++
    });
  }

  render() {
    let temperature = this.state.temperature;
    if (this.state.numberClicks < 3) {
      temperature = 'cold';
    } else if (this.state.numberClicks < 6) {
      temperature = 'cool';
    } else if (this.state.numberClicks < 9) {
      temperature = 'tepid';
    } else if (this.state.numberClicks < 12) {
      temperature = 'warm';
    } else if (this.state.numberClicks < 15) {
      temperature = 'hot';
    } else if (this.state.numberClicks >= 18) {
      temperature = 'nuclear';
    }
    return <button className={`hot-button ${temperature}`} onClick={this.handleClick}>Hot Button</button>;
  }
}

export default HotButton;
