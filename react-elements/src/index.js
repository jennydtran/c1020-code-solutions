import React from '../node_modules/react';
import ReactDom from '../node_modules/react-dom';

const h1 = React.createElement('h1', null, 'Hello, React!');
ReactDom.render(h1, document.getElementById('root'));
