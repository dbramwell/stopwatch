import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('app contains menu', () => {
  const app = shallow(<App />);
  expect(app.find('Menu').length).toEqual(1);
});

it('app contains timer on creation', () => {
  const app = shallow(<App />);
  expect(app.find('Timer').length).toEqual(1);
});

it('app contains stopwatch when STOPWATCH is clicked', () => {
  const app = mount(<App />);
  app.find('button').at(1).simulate("click");
  expect(app.find('Stopwatch').length).toEqual(1);
});