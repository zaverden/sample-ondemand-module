import React from 'react';
import ReactDOM from 'react-dom';

async function name(params) {
  await params();
}

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
