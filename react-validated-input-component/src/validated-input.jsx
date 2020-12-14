import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordValue: '',
      errorMessage: null
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

    if (event === '') {
      this.setState(state => ({
        errorMessage: 'A password is required.'
      }));
    } else if (regexEight.test(event) === false) {
      this.setState(state => ({
        errorMessage: 'Your password must be at least 8 characters long.'
      }));
    } else if (regexSpecial.test(event) === false) {
      this.setState(state => ({
        errorMessage: 'Your password must contain at least one special character.'
      }));
    } else if (regexNumber.test(event) === false) {
      this.setState(state => ({
        errorMessage: 'Your password must contain at least one number.'
      }));
    } else if (regexUppercase.test(event) === false) {
      this.setState(state => ({
        errorMessage: 'Your password must contain at least one uppercase letter.'
      }));
    } else if (regexLowercase.test(event) === false) {
      this.setState(state => ({
        errorMessage: 'Your password must contain at least one lowercase letter.'
      }));
    } else {
      this.setState(state => ({
        errorMessage: ''
      }));
    }
  }

  handleChange(event) {
    this.setState(state => ({
      passwordValue: event.target.value
    }));
    this.validatePassword(event.target.value);
  }

  render() {
    let icon;
    const errorMessage = this.state.errorMessage;

    if (errorMessage === null) {
      icon = '';
    } else if (errorMessage === '') {
      icon = 'fas fa-check';
    } else {
      icon = 'fas fa-times';
    }

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
