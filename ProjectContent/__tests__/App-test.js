/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../App');
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  App.mockClear();
});

it('renders correctly', () => {
  renderer.create(<App />);
});


it('We can check if the class constructor is called', () => {
  const app = new App();
  expect(App).toHaveBeenCalledTimes(1);
});

// it('We can check if _onPressButton1 is called', () => {
//   const app = new App();
//   const button1test = 'Good Morning';
//   expect(app._onPressButton1()).toBe();
//   jest.spyOn(Alert, 'alert').mockImplementation(_onPressButton1() => {});
//
//   const wrapper = shallow(<App />);
//   wrapper.findWhere(n => n.props().title == 'Greeting Manner 1').simulate('Press');
//   expect(Alert.alert).toHaveBeenCalled();
// });
