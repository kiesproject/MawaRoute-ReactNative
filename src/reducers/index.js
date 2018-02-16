import { combineReducers } from 'redux';
import { AppNavigator } from '../container/AppContainer';

const initialNavState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
);

function nav(state = initialNavState, action) {
  switch (action.type) {
    default: {
      return AppNavigator.router.getStateForAction(action, state);
    }
  }
}

const appReducer = combineReducers({
  nav,
});

export default appReducer;