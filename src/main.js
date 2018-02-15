import React from 'react';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';

import AppContainer from './container/AppContainer';

// TODO: put store(reducer)
// const store = createStore();

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
