import React from 'react';
import ReactDOM from 'react-dom';
import * as AppDrawer from './app-drawer';

const navMenu = ['About', 'Get Started', 'Sign In'];

ReactDOM.render(
  <AppDrawer.AppDrawer navMenu={navMenu}/>,
  document.querySelector('#root')
);
