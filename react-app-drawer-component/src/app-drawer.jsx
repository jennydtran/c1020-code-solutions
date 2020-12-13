import React from 'react';

export const navMenu = ['About', 'Get Started', 'Sign In'];

export class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuView: false,
      navToggle: 'off',
      overlayToggle: ' none'
    };
    this.handleClickOn = this.handleClickOn.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
  }

  handleClickOn() {
    this.setState(state => ({
      menuView: true,
      navToggle: 'on',
      overlayToggle: ' overlay'
    }));
  }

  handleClickOff() {
    this.setState(state => ({
      menuView: false,
      navToggle: 'off',
      overlayToggle: ' none'
    }));
  }

  render() {
    const ListNavItem = props => {
      return (
        <a href='#' onClick={this.handleClickOff}>
          <li>{props.value}</li>
        </a>
      );
    };

    const ListNav = props => {
      const ListNavItems = navMenu.map(navitem =>
        <ListNavItem key={navMenu.indexOf(navitem).toString()} value={navitem} />
      );
      return (
        <ul>{ListNavItems}</ul>
      );
    };

    return (
      <div>
        <div>
          <div className={`container${this.state.overlayToggle}`} onClick={this.handleClickOff}>
          </div>
          <div className="icon">
            <i className="fas fa-bars fa-2x" onClick={this.handleClickOn}></i>
          </div>
        </div>
        <div className={`menu-list ${this.state.navToggle}`}>
          <h2>Menu</h2>
          <ListNav />
        </div>
      </div>
    );
  }
}
