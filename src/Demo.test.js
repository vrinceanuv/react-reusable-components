import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
