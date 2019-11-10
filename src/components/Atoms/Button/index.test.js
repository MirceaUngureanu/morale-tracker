import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button data={"test"}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
