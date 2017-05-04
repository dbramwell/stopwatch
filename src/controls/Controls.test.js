import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Controls />, div);
});

it('contains two buttons', () => {
  const controls = shallow(<Controls />);
  const buttons = controls.find('button');
  expect(buttons.length).toEqual(2);
});