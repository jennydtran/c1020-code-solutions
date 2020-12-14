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
    const regexLowercase = new RegExp('^(?=.*[a-z])');
    const regexUppercase = new RegExp('^(?=.*[A-Z])');
    const regexNumber = new RegExp('^(?=.*[0-9])');
    const regexSpecial = new RegExp('^(?=.*[!@#$%^&*()])');
    const regexEight = new RegExp('^(?=.{8,})');

    if (event.target.value === '') {
      this.setState(state => ({
        errorMessage: 'A password is required.',
        icon: 'fas fa-times'
      }));
    } else if (regexEight.test(event.target.value) === false) {
      this.setState(state => ({
        errorMessage: 'Your password must be at least 8 characters long.',
        icon: 'fas fa-times'
      }));
    } else if (regexSpecial.test(event.target.value) === false) {
      this.setState(state => ({
        errorMessage: 'Your password must contain at least one special character.',
        icon: 'fas fa-times'
      }));
    } else if (regexNumber.test(event.target.value) === false) {
      this.setState(state => ({
        errorMessage: 'Your password must contain at least one number.',
        icon: 'fas fa-times'
      }));
    } else if (regexUppercase.test(event.target.value) === false) {
      this.setState(state => ({
        errorMessage: 'Your password must contain at least one uppercase letter.',
        icon: 'fas fa-times'
      }));
    } else if (regexLowercase.test(event.target.value) === false) {
      this.setState(state => ({
        errorMessage: 'Your password must contain at least one lowercase letter.',
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
    this.setState(state => ({
      passwordValue: event.target.value
    }));
    this.validatePassword(event);
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
