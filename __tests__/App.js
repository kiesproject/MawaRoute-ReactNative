import renderer from 'react-test-renderer';
import 'react-native';
import React from 'react';
import App from '../src/main';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const tree = renderer.create(<App />);
});
