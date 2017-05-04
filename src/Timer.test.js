import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Timer />, div);
});

it('timer contains controls', () => {
  const timer = shallow(<Timer />);
  expect(timer.find('Controls').length).toEqual(1);
});

it('timer contains time left, initially 5 mins', () => {
  const timer = shallow(<Timer />);
  expect(timer.find('p').text()).toEqual("5m 00s");
});
