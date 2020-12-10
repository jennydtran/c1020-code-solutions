import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSwitch: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      toggleSwitch: !this.state.toggleSwitch
    });
  }

  render() {
    let text;
    let toggle;
    if (this.state.toggleSwitch) {
      toggle = 'off';
      text = 'OFF';
    } else {
      toggle = 'on';
      text = 'ON';
    }
    return (
      <div id="container">
        <div onClick={this.handleClick} className={toggle} id="toggle-rectangle">
          <div id="toggle-circle">
          </div>
        </div>
        <p id="label">{text}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
