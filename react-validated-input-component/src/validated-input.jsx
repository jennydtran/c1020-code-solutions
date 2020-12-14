import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  validatePassword(event) {
    if (event.target.value === '') {
      this.setState(state => ({
        errorMessage: 'A password is required.',
        icon: 'fas fa-times'
      }));
    } else if (event.target.value.length < 8) {
      this.setState(state => ({
        errorMessage: 'Your password is too short.',
        icon: 'fas fa-times'
      }));
    } else {
      this.setState(state => ({
        errorMessage: '',
        icon: 'fas fa-check'
      }));
    }
  }

  handleChange(event) {
    this.validatePassword(event);
    this.setState({
      passwordValue: event.target.value
    });
  }

  render() {
    const icon = this.state.icon;
    const errorMessage = this.state.errorMessage;

    return (
      <div className="container">
        <form>
          <label>Password</label>
          <input required type="password" id="Password" value={this.state.passwordValue} onChange={this.handleChange}/>
          <i className={icon}></i>
          <p>{errorMessage}</p>
        </form>
      </div>
    );
  }
}
