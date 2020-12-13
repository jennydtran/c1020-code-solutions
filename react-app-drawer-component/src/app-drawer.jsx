import React from 'react';

export const navMenu = ['About', 'Get Started', 'Sign In'];

export function ListNavItem(props) {
  return (
    <a href='#' onClick={props.onClick}>
      <li>{props.value}</li>
    </a>
  );
}

export function ListNav(props) {
  const ListNavItems = navMenu.map(navitem =>
    <ListNavItem key={navMenu.indexOf(navitem).toString()} value={navitem} onClick={props.onClick} />
  );
  return (
    <ul>{ListNavItems}</ul>
  );
}

export function Icon(props) {
  return (
    <div className="icon">
      <i className="fas fa-bars fa-2x" onClick={props.onClick}></i>
    </div>
  );
}

export class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuView: false
    };
    this.setState = this.setState.bind(this);
    this.handleClickOn = this.handleClickOn.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
  }

  handleClickOn() {
    this.setState({
      menuView: true
    });
  }

  handleClickOff() {
    this.setState({
      menuView: false
    });
  }

  render() {
    let navToggle;
    let overlayToggle;

    if (this.state.menuView) {
      navToggle = 'on';
      overlayToggle = ' overlay';
    } else if (!this.state.menuView) {
      navToggle = 'off';
      overlayToggle = ' none';
    }

    return (
      <div>
        <div>
          <div className={`container${overlayToggle}`} onClick={this.handleClickOff}>
          </div>
          <Icon onClick={this.handleClickOn}/>
        </div>
        <div className={`menu-list ${navToggle}`}>
          <h2>Menu</h2>
          <ListNav onClick={this.handleClickOff}/>
        </div>
      </div>
    );
  }
}
