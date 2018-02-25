import React from 'react';
import { createStore, applyMiddleware, } from 'redux';
import { Provider } from 'react-redux';
import createMiddlewares from 'redux-saga';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

import AppContainer from './container/AppContainer';
import appReducer from './reducers/index';
import rootSaga from './sagas/index';

// TODO: create `saga` middleware
const sagaMiddleware = createMiddlewares();

// navigation middleware
const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const addListener = createReduxBoundAddListener('root');

// create store
const store = createStore(
  appReducer,
  applyMiddleware(navMiddleware, sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer
          addListener={addListener}
        />
      </Provider>
    );
  }
}
