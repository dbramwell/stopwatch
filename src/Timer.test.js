import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import { shallow, mount } from 'enzyme';

jest.useFakeTimers();

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

it('state.mins is initially 5', () => {
  const timer = shallow(<Timer />);
  expect(timer.state().mins).toBe(5);
});

it('state.secs is initially 0', () => {
  const timer = shallow(<Timer />);
  expect(timer.state().secs).toBe(0);
});

it('when "START" is clicked in controller, setInterval is called', () => {
  const timer = mount(<Timer />);
  const startButton = timer.find('button').at(0);
  startButton.simulate("click");
  expect(setInterval.mock.calls.length).toBe(1);
});

it('when "START" is clicked in controller, state.mins and state.secs decreases', () => {
  const timer = mount(<Timer />);
  const startButton = timer.find('button').at(0);
  startButton.simulate("click");
  jest.runTimersToTime(1000);
  expect(timer.state().mins).toBe(4);
  expect(timer.state().secs).toBe(59);
  expect(timer.find('p').text()).toEqual("4m 59s");
});