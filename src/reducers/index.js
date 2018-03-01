import { List } from 'immutable';
import { combineReducers } from 'redux';
import { AppNavigator } from '../container/AppContainer';

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

function nav(state = initialNavState, action) {
  switch (action.type) {
    default: {
      return AppNavigator.router.getStateForAction(action, state);
    }
  }
}

const initialListState = List([]);
function restaurant(state = initialListState, action) {
  switch (action.type) {
    case 'UPDATE_RESTAURANT': {
      return List(action.list);
    }
    default: {
      return state;
    }
  }
}

const appReducer = combineReducers({
  nav,
  restaurant,
});

export default appReducer;
