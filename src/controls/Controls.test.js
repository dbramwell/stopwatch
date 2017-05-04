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

it('buttons are named "START" and "RESET" on initial rendering', () => {
  const controls = shallow(<Controls />);
  const buttons = controls.find('button');
  expect(buttons.at(0).text()).toEqual("START");
  expect(buttons.at(1).text()).toEqual("RESET");
});