import React from 'react';
import ReactDom from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (!this.state.isClicked) {
      return <button onClick={this.handleClick}>Click Me!</button>;
    }
    return <button>Thanks!</button>;
  }
}

ReactDom.render(
  <CustomButton isClicked />,
  document.querySelector('#root')
);
