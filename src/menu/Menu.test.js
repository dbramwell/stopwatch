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

it('props.onClick is called with "stopwatch" when STOPWATCH is clicked', () => {
  const mockFunction = jest.fn();
  const menu = shallow(<Menu onClick={mockFunction}/>);
  const stopwatchButton = menu.find('button').at(1);
  stopwatchButton.simulate("click");
  expect(mockFunction.mock.calls).toEqual([["stopwatch"]]);
});

it('props.onClick is called with "timer" when TIMER is clicked', () => {
  const mockFunction = jest.fn();
  const menu = shallow(<Menu onClick={mockFunction}/>);
  menu.setState({active: 'stopwatch'});
  const timerButton = menu.find('button').at(0);
  timerButton.simulate("click");
  expect(mockFunction.mock.calls).toEqual([["timer"]]);
});

it('state.active is set to stopwatch when STOPWATCH is clicked', () => {
  const mockFunction = jest.fn();
  const menu = shallow(<Menu onClick={mockFunction}/>);
  const stopwatchButton = menu.find('button').at(1);
  stopwatchButton.simulate("click");
  expect(mockFunction.mock.calls.length).toBe(1);
  expect(menu.state().active).toEqual("stopwatch");
});

it('state.active is set to timer when TIMER is clicked', () => {
  const mockFunction = jest.fn();
  const menu = shallow(<Menu onClick={mockFunction}/>);
  menu.setState({active: 'stopwatch'});
  const timerButton = menu.find('button').at(0);
  timerButton.simulate("click");
  expect(mockFunction.mock.calls.length).toBe(1);
  expect(menu.state().active).toEqual("timer");
});

it('when state.active is set to timer, TIMER button is disabled and STOPWATCH button is enabled', () => {
  const mockFunction = jest.fn();
  const menu = shallow(<Menu onClick={mockFunction}/>);
  const timerButton = menu.find('button').at(0);
  const stopwatch = menu.find('button').at(1);
  expect(timerButton.html().includes('disabled=""')).toBeTruthy();
  expect(stopwatch.html().includes('disabled=""')).toBeFalsy();
});

it('when state.active is set to stopwatch, STOPWATCH button is disabled', () => {
  const mockFunction = jest.fn();
  const menu = shallow(<Menu onClick={mockFunction}/>);
  menu.setState({active: 'stopwatch'});
  const timerButton = menu.find('button').at(0);
  const stopwatch = menu.find('button').at(1);
  expect(timerButton.html().includes('disabled=""')).toBeFalsy();
  expect(stopwatch.html().includes('disabled=""')).toBeTruthy();
});