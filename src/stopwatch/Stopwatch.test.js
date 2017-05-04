import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './Stopwatch';
import { shallow, mount } from 'enzyme';

jest.useFakeTimers();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stopwatch/>, div);
});

it('stopwatch contains controls', () => {
  const stopwatch = shallow(<Stopwatch/>);
  expect(stopwatch.find('Controls').length).toEqual(1);
});

it('stopwatch contains time passed, initially 0 seconds', () => {
  const stopwatch = shallow(<Stopwatch/>);
  expect(stopwatch.find('p').text()).toEqual("0s 00");
});

it('state.secs is initially 0', () => {
  const stopwatch = shallow(<Stopwatch/>);
  expect(stopwatch.state().secs).toBe(0);
});

it('state.centisecs is initially 0', () => {
  const stopwatch = shallow(<Stopwatch/>);
  expect(stopwatch.state().centisecs).toBe(0);
});

it('when "START" is clicked in controller, setInterval is called', () => {
  const stopwatch = mount(<Stopwatch/>);
  const startButton = stopwatch.find('button').at(0);
  startButton.simulate("click");
  expect(setInterval.mock.calls.length).toBe(1);
});

it('when "START" is clicked in controller, state.secs and state.centisecs increases', () => {
  const stopwatch = mount(<Stopwatch/>);
  const startButton = stopwatch.find('button').at(0);
  startButton.simulate("click");
  jest.runTimersToTime(1500);
  expect(stopwatch.state().secs).toBe(1);
  expect(stopwatch.state().centisecs).toBe(50);
  expect(stopwatch.find('p').text()).toEqual("1s 50");
});

it('when "STOP" is clicked in controller, state.mins and state.secs stops decreasing', () => {
  const stopwatch = mount(<Stopwatch/>);
  const startButton = stopwatch.find('button').at(0);
  startButton.simulate("click");
  jest.runTimersToTime(1500);
  expect(stopwatch.state().secs).toBe(1);
  expect(stopwatch.state().centisecs).toBe(50);
  expect(stopwatch.find('p').text()).toEqual("1s 50");
  startButton.simulate("click");
  jest.runTimersToTime(1500);
  expect(stopwatch.state().secs).toBe(1);
  expect(stopwatch.state().centisecs).toBe(50);
  expect(stopwatch.find('p').text()).toEqual("1s 50");
});

it('when "RESET" is clicked in controller, state.mins and state.secs return to 5 and 0', () => {
  const stopwatch = mount(<Stopwatch/>);
  const startButton = stopwatch.find('button').at(0);
  startButton.simulate("click");
  jest.runTimersToTime(1430);
  expect(stopwatch.state().secs).toBe(1);
  expect(stopwatch.state().centisecs).toBe(43);
  expect(stopwatch.find('p').text()).toEqual("1s 43");
  startButton.simulate("click");
  jest.runTimersToTime(1000);
  expect(stopwatch.state().secs).toBe(1);
  expect(stopwatch.state().centisecs).toBe(43);
  expect(stopwatch.find('p').text()).toEqual("1s 43");
  const resetButton = stopwatch.find('button').at(1);
  resetButton.simulate("click");
  expect(stopwatch.state().secs).toBe(0);
  expect(stopwatch.state().centisecs).toBe(0);
  expect(stopwatch.find('p').text()).toEqual("0s 00");
});