import React from 'react';
import ReactDom from 'react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}

const root = document.querySelector('#root');

ReactDom.render(<CustomButton />, root);
