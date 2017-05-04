import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Controls />, div);
});

it('contains two buttons', () => {
  const controls = shallow(<Controls/>);
  const buttons = controls.find('button');
  expect(buttons.length).toEqual(2);
});

it('buttons are named "START" and "RESET" on initial rendering', () => {
  const controls = shallow(<Controls />);
  const buttons = controls.find('button');
  expect(buttons.at(0).text()).toEqual("START");
  expect(buttons.at(1).text()).toEqual("RESET");
});

it('initial state of the controls shows running as false', () => {
  const controls = shallow(<Controls />);
  expect(controls.state().running).toBeFalsy();
});

it('state.running is true after start button click', () => {
  const controls = mount(<Controls onStart={function(){}}/>);
  const buttons = controls.find('button');
  buttons.at(0).simulate("click");
  expect(controls.state().running).toBeTruthy();
});

it('"START" button changes to "STOP" after START button has been clicked', () => {
  const controls = mount(<Controls onStart={function(){}}/>);
  const buttons = controls.find('button');
  buttons.at(0).simulate("click");
  expect(buttons.at(0).text()).toEqual("STOP");
});

it('"START" button changes back to "START" after START button has been clicked twice', () => {
  const controls = mount(<Controls onStart={function(){}}/>);
  const buttons = controls.find('button');
  buttons.at(0).simulate("click");
  expect(buttons.at(0).text()).toEqual("STOP");
  buttons.at(0).simulate("click");
  expect(buttons.at(0).text()).toEqual("START");
});

it('props.onStart() is called when start is clicked', () => {
  const mockFunction = jest.fn();
  const controls = mount(<Controls onStart={mockFunction}/>);
  const startButton = controls.find('button').at(0);
  startButton.simulate("click");
  expect(startButton.text()).toEqual("STOP");
  expect(mockFunction.mock.calls.length).toBe(1);
});