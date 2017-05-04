import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Menu />, div);
});

it('contains two buttons', () => {
  const menu = shallow(<Menu />);
  const buttons = menu.find('button');
  expect(buttons.length).toEqual(2);
});

it('buttons are named "TIMER" and "STOPWATCH" on initial rendering', () => {
  const menu = shallow(<Menu />);
  const buttons = menu.find('button');
  expect(buttons.at(0).text()).toEqual("TIMER");
  expect(buttons.at(1).text()).toEqual("STOPWATCH");
});