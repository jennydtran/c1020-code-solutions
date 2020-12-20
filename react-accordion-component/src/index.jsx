import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  {
    id: 1,
    topic: 'Hypertext Markup Language',
    detail: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and Javascript, it forms a triad of cornerstone technologies for the World Wid Web.'
  },
  {
    id: 2,
    topic: 'Cascading Style Sheets',
    detail: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology o fthe World Wide Web, alongside HTML and Javascript.'
  },
  {
    id: 3,
    topic: 'JavaScript',
    detail: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming lanugage that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

ReactDOM.render(
  <Accordion topics={topics} />,
  document.querySelector('#root')
);
